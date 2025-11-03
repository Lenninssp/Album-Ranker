
import { User } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { disconnect } from "process";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { success: false, error: "Invalid or missing user ID in URL"},
        { status: 400 }
      )
    }
    const { currentUserId } = await req.json();

    if (!currentUserId) {
      return NextResponse.json(
        { success: false, error: "Missing currentUserId in request body"},
        { status: 400 }
      )
    }

    const [ currentUser, userToFollow ] = await Promise.all([
      prisma.user.findUnique({ where: { id: currentUserId }}),
      prisma.user.findUnique({ where: { id: Number(id) }})
    ]);


    if (!currentUser || !userToFollow) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 }
      )
    }

    const exists = await prisma.user.findFirst({
      where: {
        id: currentUserId,
        following: { some: { id: Number(id) }},
      }
    });

    if (exists) {
      return NextResponse.json(
        { success: false, error: "You already follow this user." },
        { status: 409 }
      );
    }


    await prisma.user.update({
      where: { id: currentUserId },
      data: { following: { connect: { id: Number(id) }}}
    });

    return NextResponse.json(
      { success: true, message: "Successfully followed user."},
      { status: 200 }
    )
  }
  catch (err) {
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }>}
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

    if (!currentUserId) {
      return NextResponse.json(
        { success: false, error: "Missing currentUserId in request body." },
        { status: 400 }
      )
    }

    const exists = await prisma.user.findFirst({
      where: {
        id: currentUserId,
        following: { some: { id: Number(id) }},
      }
    });

    if (!exists) {
      return NextResponse.json(
        { success: false, error: "Internal server error" },
        { status: 500 }
      )
    }

    await prisma.user.update({
      where: { id: currentUserId },
      data: { following: { disconnect: { id: Number(id) }}},
    });

    return NextResponse.json(
      { success: true, message: "Successfully unfollowed user"},
      { status: 200 },
    )
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
