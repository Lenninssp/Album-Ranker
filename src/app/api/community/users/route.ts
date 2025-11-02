import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}