import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}
export async function GET(_: Request, { params }: Params) {
  const artist = await prisma.artistEdited.findUnique({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(artist);
}

export async function PUT(req: Request, { params }: Params) {
  const data = await req.json();
  const updated = await prisma.artistEdited.update({
    where: { id: Number(params.id) },
    data,
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: Params) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }
  try {
    await prisma.artistEdited.delete({
      where: {
        idArtist_userId: {
          idArtist: params.id,
          userId,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting artist:", error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Artist not found for this user." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error while deleting artist." },
      { status: 500 }
    );
  }
}
