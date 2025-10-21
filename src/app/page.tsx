"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const {authorized, toggle} = useSession()

  const router = useRouter();

  useEffect(() => {
    if (!authorized) {
      router.push("/login");
    }
  }, [authorized, router]);
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <div>Hello world</div>
      <Button onClick={toggle} className="cursor-pointer">Logout</Button>
    </div>
  );
}
