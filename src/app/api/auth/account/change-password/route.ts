import { getServerSession } from "next-auth";
import { authOptions } from "../../[...nextauth]/route";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt, { compare } from "bcryptjs";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthoriszed" }, { status: 401 });
  }

  const { currentPassword, newPassword } = await req.json();

  if (typeof newPassword !== "string" || newPassword.length < 8) {
    return NextResponse.json({ error: "Password too short" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session?.user.email },
  });
  if (!user)
    return NextResponse.json({ error: "User not foung" }, { status: 404 });

  const ok = await compare(currentPassword ?? "", user?.password);
  console.log(currentPassword, user.password)
  if (!ok)
    return NextResponse.json(
      { error: "Current password is incorrect" },
      { status: 400 }
    );

  const newHash = await bcrypt.hash(newPassword, 10);

  await prisma.$transaction([
    prisma.user.update({
      where: { id: user.id },
      data: { password: newHash, passwordUpdatedAt: new Date() },
    }),
    prisma.session.deleteMany({
      where: {
        userId: user.id,
      },
    }),
  ]);
  return NextResponse.json({ ok: true });
}
