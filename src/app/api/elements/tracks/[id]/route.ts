import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

interface Params {
  params: { id: string}
}

export async function GET (_: Request, { params }: Params) {
  const track = await prisma.trackEdited.findUnique({
    where: { id: Number(params.id)}
  })
  return NextResponse.json(track);
}

export async function PUT( req: Request, { params }: Params) {
  const data = await req.json();
  const updated = await prisma.trackEdited.update({
    where: { id: Number(params.id) },
    data,
  })
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: Params) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }
  try {
    await prisma.trackEdited.delete({
      where: {
        idTrack_userId: {
          idTrack: params.id,
          userId,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting track:", error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "track not found for this user." },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error while deleting track." },
      { status: 500 }
    );
  }
}