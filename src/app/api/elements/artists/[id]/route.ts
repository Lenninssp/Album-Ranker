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

export async function DELETE(_: Request, { params }: Params) {
  await prisma.artistEdited.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ success: true });
}
