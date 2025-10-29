import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();
  const accessToken = session?.accessToken;

  const res = await fetch(
     "https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50",
     { 
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
     }
  )

  const data = await res.json();

  
}

/**
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession();
  const accessToken = session?.accessToken;

  const res = await fetch(
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await res.json();

  // Guarda en DB
  await prisma.playlist.createMany({
    data: data.items.map((p: any) => ({
      userId: session!.user.id,
      playlistId: p.id,
      title: p.snippet.title,
      thumbnail: p.snippet.thumbnails?.default?.url ?? "",
    })),
    skipDuplicates: true,
  });

  return Response.json({
    imported: data.items.length,
    playlists: data.items.map((p: any) => p.snippet.title),
  });
}
 */