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

export async function DELETE(_: Request, { params }: Params) {
  await prisma.trackEdited.delete({ where: { id: Number(params.id)}});
  return NextResponse.json({ success: true})
}

