"use client";
import { DefaultFrame } from "@/components/default-frame";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Playground = () => {
  const { data: session } = useSession();

  const [playlist, setPlaylist] = useState<JSON>();

  const handleTest = async () => {
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50",
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );

    setPlaylist(await res.json());
  };

  return (
    <DefaultFrame>
      <div className="h-full w-full flex flex-col gap-3 justify-between p-4 items-center overflow-auto">
        <div className=" text-4xl font-bold ">This is your playground</div>

        <Button onClick={handleTest}>Fetch Playlist</Button>

        <div className="flex w-full overflow-auto">
          <pre className="">{JSON.stringify(playlist, null, 2)}</pre>
        </div>
      </div>
    </DefaultFrame>
  );
};

export default Playground;
