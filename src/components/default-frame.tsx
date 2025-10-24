import { NavBar } from "./navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useIdelLogout } from "@/hooks/useIdleLogout";

export const DefaultFrame = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  useIdelLogout(15 * 60 * 1000);

  if (status === "loading") return <p>Loading...</p>;


  return (
    <div className={"h-full w-full flex flex-col"}>
      <NavBar />
      <div
        className={cn(" h-full w-full p-5 flex-1 overflow-hidden", className)}
      >
        {children}
      </div>
    </div>
  );
};
