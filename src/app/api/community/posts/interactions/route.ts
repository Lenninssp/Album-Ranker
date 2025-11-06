import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      userId,
      liked,
      comment,
      trackEditedId,
      albumEditedId,
      artistEditedId,
    } = body;

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const ids = [trackEditedId, albumEditedId, artistEditedId].filter(Boolean);
    if (ids.length !== 1) {
      return NextResponse.json(
        {
          error:
            "Proide exactly one of trackEditedId, albumEditedId, or artistEditedId",
        },
        { status: 500 }
      );
    }

    const interaction = await prisma.interaction.upsert({
      where: {
        userId_trackEditedId_albumEditedId_artistEditedId: {
          userId,
          trackEditedId: trackEditedId ?? null,
          albumEditedId: albumEditedId ?? null,
          artistEditedId: artistEditedId ?? null,
        },
      },
      update: {
        ...(liked !== undefined && { liked }),
        ...(comment !== undefined && { comment }),
      },
      create: {
        userId,
        trackEditedId: trackEditedId ?? null,
        albumEditedId: albumEditedId ?? null,
        artistEditedId: artistEditedId ?? null,
        liked: liked ?? false,
        comment: comment ?? null,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return NextResponse.json(
      interaction ,
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to create interaction" },
      { status: 500 }
    );
  }
}



/*

Example requests 

to comment:
await fetch("/api/interactions", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    comment: "This album is amazing",
    albumEditedId: 12,
  }),
});

to like: 
await fetch("/api/interactions", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    liked: true,
    albumEditedId: 12,
  }),
});
*/
