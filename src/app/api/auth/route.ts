import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { action, email, password, name } = await req.json();

  if (action === "register") {
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {email, password: hashed, name},
    });
    return NextResponse.json(user);
  }

  if (action === "login") {
    const user = await prisma.user.findUnique({ where: { email }});
    if (!user) return NextResponse.json({ error: "user Not found"}, {status: 400});

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return NextResponse.json({ error: "Invalid password"}, { status: 401 });

    return NextResponse.json({ message: "Aunthenticated", user});
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
