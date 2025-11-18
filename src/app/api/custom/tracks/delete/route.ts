import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const data = await req.json();
    const id = Number(data.id);

    if (!id)
      return NextResponse.json(
        { error: "Track ID is required." },
        { status: 400 }
      );

    await prisma.userCreatedTrack.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true, message: "Track deleted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Delete custom track error:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Track not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}