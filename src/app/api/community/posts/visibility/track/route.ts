import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { userId, publicPost, trackEditedId } =
      body;

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    if (trackEditedId.length !== 1) {
      return NextResponse.json(
        { error: " Provide exactly trach, album or artist id" },
        { status: 500 }
      );
    }

    const interaction = await prisma.trackEdited.update({
      where: { id: trackEditedId },
      data: { public: publicPost },
    });

    return NextResponse.json(
      {success: true, interaction},
      {status: 200}
    )
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to change visibility",
    });
  }
}

