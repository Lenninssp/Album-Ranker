import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const exists = await prisma.user.findUnique({ where: { email }});
  if (exists) return NextResponse.json({ error: "User already exists"}, {status: 400});
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashed, name },
  });
  
  return NextResponse.json(user);

  // return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
