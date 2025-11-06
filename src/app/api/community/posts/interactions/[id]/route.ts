import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { success: false, message: "Invalid or missing user ID in URL" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const interactions = await prisma.interaction.findMany({
      where: { userId: Number(id) },
    });

    return NextResponse.json(interactions, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Could not get interactions" },
      { status: 500 }
    );
  }
}
