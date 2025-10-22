"use client";
import { DefaultFrame } from "@/components/default-frame";
import { Button } from "@/components/ui/button";
import { useSession } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  return (
    <DefaultFrame>
      <div className="h-full w-full flex items-center justify-center flex-col gap-5">
        <div className="text-4xl font-bold">Welcome</div>
        <div className="text-2xl text-center">
          This is the one and only place where you can find your favourite music
          and rate is as you like, with no restrictions,just go to the search
          page and start
        </div>
      </div>
    </DefaultFrame>
  );
}
