"use client";
import { DefaultFrame } from "@/components/default-frame";
import { Button } from "@/components/ui/button";
import { useSession } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  return (
    <DefaultFrame>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="text-4xl font-bold">This is your homepage</div>
      </div>
    </DefaultFrame>
  );
}
