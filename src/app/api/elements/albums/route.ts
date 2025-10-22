
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId= Number(searchParams.get("userId"));
  if (!userId) return NextResponse.json({error: "userId required"}, { status: 400 });

  const albums = await prisma.albumEdited.findMany({ where: {userId}});
  return NextResponse.json(albums);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newAlbum = await prisma.albumEdited.create({ data });
  return NextResponse.json(newAlbum);
}