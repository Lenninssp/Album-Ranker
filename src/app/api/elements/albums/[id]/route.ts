import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const album = await prisma.albumEdited.findUnique({
    where: { id: Number(id) },
  });
  return NextResponse.json(album);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();
  const updated = await prisma.albumEdited.update({
    where: { id: Number(id) },
    data,
  });
  return NextResponse.json(updated);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    await prisma.albumEdited.delete({
      where: {
        idAlbum_userId: {
          idAlbum: id,
          userId,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting album:", error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "album not found for this user." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error while deleting album." },
      { status: 500 }
    );
  }
}
