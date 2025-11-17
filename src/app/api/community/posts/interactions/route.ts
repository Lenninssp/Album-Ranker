import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

function buildWhereClause(
  userId: number,
  trackEditedId: number | null,
  albumEditedId: number | null,
  artistEditedId: number | null
) {
  // Prisma requires ALL fields of the unique index to be present, even if their value is null.
  const where = {
    userId,
    trackEditedId,
    albumEditedId,
    artistEditedId,
  };

  return {
    userId_trackEditedId_albumEditedId_artistEditedId: where,
  };
}

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

    // 1. Validate userId
    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    // 2. Normalize IDs and Validate exactly one target ID is provided
    const normalizedTrackId = trackEditedId ?? null;
    const normalizedAlbumId = albumEditedId ?? null;
    const normalizedArtistId = artistEditedId ?? null;

    // Count how many IDs are actually present (not null)
    const presentIds = [
      normalizedTrackId,
      normalizedAlbumId,
      normalizedArtistId,
    ].filter((id) => id !== null);

    if (presentIds.length !== 1) {
      return NextResponse.json(
        {
          error:
            "Provide exactly one of trackEditedId, albumEditedId, or artistEditedId",
        },
        { status: 400 }
      );
    }

    // Identify the non-null ID for simplified lookup
    let targetWhere: Prisma.InteractionWhereInput = { userId };
    let targetKey: "trackEditedId" | "albumEditedId" | "artistEditedId";
    let targetValue: number;

    if (normalizedTrackId !== null) {
      targetKey = "trackEditedId";
      targetValue = normalizedTrackId;
    } else if (normalizedAlbumId !== null) {
      targetKey = "albumEditedId";
      targetValue = normalizedAlbumId;
    } else {
      // normalizedArtistId !== null
      targetKey = "artistEditedId";
      targetValue = normalizedArtistId;
    }

    // Append the non-null target ID to the where clause
    targetWhere = { ...targetWhere, [targetKey]: targetValue };

    // 3. Check if interaction already exists using findFirst
    // This bypasses the strict composite unique key requirements that cause the "must not be null" error.
    const existing = await prisma.interaction.findFirst({
      where: targetWhere,
    });

    let interaction;

    if (existing) {
      // Get the full uniqueWhere clause for update/delete operations
      const fullUniqueWhere = buildWhereClause(
        userId,
        normalizedTrackId,
        normalizedAlbumId,
        normalizedArtistId
      ) as Prisma.InteractionWhereUniqueInput;

      // Update existing interaction
      const updateData: any = {};

      if (liked !== undefined) {
        updateData.liked = liked;
      }

      if (comment !== undefined) {
        updateData.comment = comment;
      }

      // Only perform update if there are changes
      if (Object.keys(updateData).length > 0) {
        interaction = await prisma.interaction.update({
          where: fullUniqueWhere,
          data: updateData,
          include: {
            user: { select: { id: true, name: true } },
          },
        });
      } else {
        // No changes, return existing with user data
        interaction = await prisma.interaction.findUnique({
          where: fullUniqueWhere,
          include: {
            user: { select: { id: true, name: true } },
          },
        });
      }
    } else {
      console.log(
        userId,
        normalizedTrackId,
        normalizedAlbumId,
        normalizedArtistId,
        liked ?? false,
        comment ?? null
      );
      // Create new interaction
      interaction = await prisma.interaction.create({
        data: {
          userId,
          trackEditedId: normalizedTrackId,
          albumEditedId: normalizedAlbumId,
          artistEditedId: normalizedArtistId,
          liked: liked ?? false,
          comment: comment ?? null,
        },
        include: {
          user: { select: { id: true, name: true } },
        },
      });
    }

    return NextResponse.json(interaction, { status: 200 });
  } catch (err) {
    console.error("Error in interaction API:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create/update interaction",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch interactions
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const trackEditedId = searchParams.get("trackEditedId");
    const albumEditedId = searchParams.get("albumEditedId");
    const artistEditedId = searchParams.get("artistEditedId");

    const where: any = {};

    if (userId) {
      where.userId = Number(userId);
    }

    if (trackEditedId) {
      where.trackEditedId = Number(trackEditedId);
    }

    if (albumEditedId) {
      where.albumEditedId = Number(albumEditedId);
    }

    if (artistEditedId) {
      where.artistEditedId = Number(artistEditedId);
    }

    const interactions = await prisma.interaction.findMany({
      where,
      include: {
        user: { select: { id: true, name: true } },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(interactions, { status: 200 });
  } catch (err) {
    console.error("Error fetching interactions:", err);
    return NextResponse.json(
      { error: "Failed to fetch interactions" },
      { status: 500 }
    );
  }
}

// DELETE endpoint to remove interactions
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, trackEditedId, albumEditedId, artistEditedId } = body;

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const normalizedTrackId = trackEditedId ?? null;
    const normalizedAlbumId = albumEditedId ?? null;
    const normalizedArtistId = artistEditedId ?? null;

    const whereClause = buildWhereClause(
      userId,
      normalizedTrackId,
      normalizedAlbumId,
      normalizedArtistId
    );

    await prisma.interaction.delete({
      where: whereClause,
    });

    return NextResponse.json(
      { success: true, message: "Interaction deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting interaction:", err);
    return NextResponse.json(
      { error: "Failed to delete interaction" },
      { status: 500 }
    );
  }
}

/*
Example requests:

// Create/update a comment:
await fetch("/api/interactions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: 1,
    comment: "This album is amazing",
    albumEditedId: 12,
  }),
});

// Create/update a like:
await fetch("/api/interactions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: 1,
    liked: true,
    albumEditedId: 12,
  }),
});

// Update both comment and like:
await fetch("/api/interactions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: 1,
    liked: true,
    comment: "Amazing!",
    albumEditedId: 12,
  }),
});

// Get all interactions for a user:
await fetch("/api/interactions?userId=1");

// Get all interactions for an album:
await fetch("/api/interactions?albumEditedId=12");

// Get specific interaction:
await fetch("/api/interactions?userId=1&albumEditedId=12");

// Delete an interaction:
await fetch("/api/interactions", {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: 1,
    albumEditedId: 12,
  }),
});
*/
