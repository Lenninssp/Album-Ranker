import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400});

  const artists = await prisma.artistEdited.findMany({ where: { userId }});
  return NextResponse.json(artists);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newArtist = await prisma.artistEdited.create({ data });
  return NextResponse.json(newArtist);
}