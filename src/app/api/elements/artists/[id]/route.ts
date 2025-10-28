import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}
export async function GET(_: NextRequest, { params }: Params) {
  const { id } = await params;
  const artist = await prisma.artistEdited.findUnique({
    where: { id: Number(id) },
  });
  return NextResponse.json(artist);
}

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const data = await req.json();
  const updated = await prisma.artistEdited.update({
    where: { id: Number(id) },
    data,
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const { id } = await params;
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }
  try {
    await prisma.artistEdited.delete({
      where: {
        idArtist_userId: {
          idArtist: id,
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
