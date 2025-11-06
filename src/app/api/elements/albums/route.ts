import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId)
    return NextResponse.json({ error: "userId required" }, { status: 400 });

  const albums = await prisma.albumEdited.findMany({ where: { userId } });
  return NextResponse.json(albums);
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
      idAlbum: data.idAlbum,
      idArtist: data.idArtist,
      strArtist: data.strArtist,
      commentary: data.commentary,
      tag: data.tag,
      rating: data.rating,
      strAlbum: data.strAlbum,
      strLabel: data.strLabel,
      strGenre: data.strGenre,
      strCountry: data.strCountry,
      strArtistThumb: data.strArtistThumb,
      strAlbumThumb: data.strAlbumThumb,
      intYearReleased: data.intYearReleased,
      userId: data.userId,
      public: data.public,
    };

    const newAlbum = await prisma.albumEdited.upsert({
      where: {
        idAlbum_userId: { idAlbum: data.idAlbum, userId: data.userId },
      },
      update: filtered,
      create: filtered,
    });
    return NextResponse.json(newAlbum);
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
