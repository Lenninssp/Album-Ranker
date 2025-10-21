import { useSession } from "@/context/auth";
import { NavBar } from "./navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const DefaultFrame = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const authorized = useSession((state) => state.authorized);
  const router = useRouter();
  useEffect(() => {
    if (!authorized) {
      router.push("/login");
    }
  }, [authorized, router]);
  return (
    <div className={" h-full w-full flex flex-col"}>
      <NavBar />
      <div className={cn(" h-full w-full p-5", className)}>{children}</div>
    </div>
  );
};
