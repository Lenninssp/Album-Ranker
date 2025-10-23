
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params }: Params) {
  const album = await prisma.albumEdited.findUnique({ where: { id: Number(params.id )}});
  return NextResponse.json(album);
}

export async function PUT(req: Request, { params }: Params) {
  const data = await req.json();
  const updated = await prisma.albumEdited.update({
    where: { id: Number(params.id)},
    data,
  })
  return NextResponse.json(updated)
}

export async function DELETE(req: Request, { params }: Params) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    await prisma.albumEdited.delete({
      where: {
        idAlbum_userId: {
          idAlbum: params.id,
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