import { PrismaClient } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = Number(searchParams.get("userId"));
  if (!userId)
    return NextResponse.json({ error: "userId required" }, { status: 400 });

  const tracks = await prisma.trackEdited.findMany({ where: { userId } });
  return NextResponse.json(tracks);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newTrack = await prisma.trackEdited.create({ data });
  return NextResponse.json(newTrack);
}
