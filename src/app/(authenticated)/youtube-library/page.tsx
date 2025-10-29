"use client";
import { DefaultFrame } from "@/components/default-frame";
import { useSession } from "next-auth/react";

const YoutubeLibrary = () => {
  const { data: session } = useSession();

  return (
    <DefaultFrame className="items-center justify-center flex">
      {session?.accessToken ? (
        <div className="text-4xl font-bold">Youtube Library</div>
      ) : (
        <div className="text-xl font-bold">
          You need to connect with your google account to connect to this page
        </div>
      )}
    </DefaultFrame>
  );
};

export default YoutubeLibrary;
