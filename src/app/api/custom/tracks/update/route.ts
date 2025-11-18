import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.id)
      return NextResponse.json(
        { error: "Track id is required for modification." },
        { status: 400 }
      );

    const updated = await prisma.userCreatedTrack.update({
      where: { id: data.id },
      data: {
        title: data.title,
        artist: data.artist,
        album: data.album,
        duration: data.duration,
        genre: data.genre,
        mood: data.mood,
        description: data.description,
        rating: data.rating,
        commentary: data.commentary,
        tag: data.tag,
        public: data.public,
      },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("Modify custom track error:", error);

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