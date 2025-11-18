import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.title || !data.userId) {
      return NextResponse.json(
        { error: "Missing required fields: title, userId" },
        { status: 400 }
      );
    }

    const track = await prisma.userCreatedTrack.create({
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
        public: data.public ?? false,
        userId: data.userId,
      },
    });

    return NextResponse.json(track, { status: 201 });
  } catch (error: any) {
    console.error("Create custom track error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}