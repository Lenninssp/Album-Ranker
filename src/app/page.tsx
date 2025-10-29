"use client";
import { DefaultFrame } from "@/components/default-frame";
import Image from "next/image";

/*
Pages to open on every work session:
https://vercel.com/lenninssps-projects/album-ranker/deployments
https://github.com/Lenninssp/Album-Ranker
https://console.cloud.google.com/auth/audience?project=musik-ranker-476612&supportedpurview=project,folder
https://icones.js.org/collection/logos?s=youtube&icon=logos:youtube-icon
https://console.cloud.google.com/apis/api/youtube.googleapis.com/metrics?project=musik-ranker-476612
https://docs.google.com/document/d/17OTnQRYqKeNIpfIkrurbAlaUAQhyXGxLtX2J-ikuigo/edit?tab=t.0

 */

export default function Home() {
 
  return (
    <DefaultFrame>
      <div className="h-full w-full flex items-center justify-center flex-col gap-5">
        <Image src={'logo.svg'} height={250} width={250} alt="main logo"/>
        <div className="text-4xl font-bold">Welcome to MusiKRankeR</div>
        <div className="text-2xl text-center">
          This is the one and only place where you can find your favourite music
          and rate is as you like, with no restrictions, just go to the search
          page and start
        </div>
      </div>
    </DefaultFrame>
  );
}
