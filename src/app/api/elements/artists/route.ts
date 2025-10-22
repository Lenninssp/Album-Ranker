import { ArtistEdited } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId)
    return NextResponse.json({ error: "userId required" }, { status: 400 });

  const artists = await prisma.artistEdited.findMany({ where: { userId } });
  return NextResponse.json(artists);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.idArtist || !data.strArtist || !data.userId) {
      return NextResponse.json(
        { error: "Missing required fields: idArtist, strArtist, or userId." },
        { status: 400 }
      );
    }
    const filtered = {
      idArtist: data.idArtist,
      commentary: data.commentary,
      tag: data.tag,
      rating: data.rating,
      strArtist: data.strArtist,
      strLabel: data.strLabel,
      strGenre: data.strGenre,
      strCountry: data.strCountry,
      strArtistThumb: data.strArtistThumb,
      userId: data.userId,
    };

    const newArtist = await prisma.artistEdited.upsert({
      where: {
        idArtist_userId: { idArtist: data.idArtist, userId: data.userId },
      },
      update: filtered,
      create: filtered,
    });

    return NextResponse.json(newArtist, { status: 201 });
  } catch (error: any) {
    console.error("Error creating artist:", error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Artist already exists (duplicate entry)." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      {
        error: "Internal server error while creating artist.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
