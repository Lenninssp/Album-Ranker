"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const { authorized, toggle } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (authorized) {
      router.push("/");
    }
  }, [authorized, router]);
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div></div>
      <Button onClick={toggle} className="cursor-pointer">Authorize</Button>
    </div>
  );
};

export default Login;
