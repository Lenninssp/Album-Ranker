import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing user ID in URL" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        following: {
          select: { id: true }
        }
      }
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const subscriptions = user.following.map(f => f.id.toString());

    return NextResponse.json(subscriptions, { status: 200 });
  } catch (err) {
    console.error("Error fetching subscriptions:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing user ID in URL" },
        { status: 400 }
      );
    }

    const { currentUserId } = await req.json();
    
    if (!currentUserId || isNaN(Number(currentUserId))) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing currentUserId in request body" },
        { status: 400 }
      );
    }

    // Prevent self-following
    if (Number(currentUserId) === Number(id)) {
      return NextResponse.json(
        { success: false, error: "Cannot follow yourself" },
        { status: 400 }
      );
    }

    // Check if both users exist
    const [currentUser, userToFollow] = await Promise.all([
      prisma.user.findUnique({ where: { id: Number(currentUserId) } }),
      prisma.user.findUnique({ where: { id: Number(id) } })
    ]);

    if (!currentUser || !userToFollow) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Check if already following
    const exists = await prisma.user.findFirst({
      where: {
        id: Number(currentUserId),
        following: { some: { id: Number(id) } }
      }
    });

    if (exists) {
      return NextResponse.json(
        { success: false, error: "Already following this user" },
        { status: 409 }
      );
    }

    // Add the follow relationship
    await prisma.user.update({
      where: { id: Number(currentUserId) },
      data: { 
        following: { 
          connect: { id: Number(id) } 
        } 
      }
    });

    return NextResponse.json(
      { success: true, message: "Successfully followed user" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error following user:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Unfollow a user (remove subscription)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing user ID in URL" },
        { status: 400 }
      );
    }

    const { currentUserId } = await req.json();
    
    if (!currentUserId || isNaN(Number(currentUserId))) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing currentUserId in request body" },
        { status: 400 }
      );
    }

    // Check if the follow relationship exists
    const exists = await prisma.user.findFirst({
      where: {
        id: Number(currentUserId),
        following: { some: { id: Number(id) } }
      }
    });

    if (!exists) {
      return NextResponse.json(
        { success: false, error: "Not following this user" },
        { status: 404 }
      );
    }

    // Remove the follow relationship
    await prisma.user.update({
      where: { id: Number(currentUserId) },
      data: { 
        following: { 
          disconnect: { id: Number(id) } 
        } 
      }
    });

    return NextResponse.json(
      { success: true, message: "Successfully unfollowed user" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error unfollowing user:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}