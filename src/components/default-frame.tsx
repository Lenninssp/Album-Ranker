import { useSession } from "@/context/auth";
import { NavBar } from "./navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const DefaultFrame = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const authorized = useSession((state) => state.authorized);
  const hasHydrated = useSession.persist.hasHydrated();

  const router = useRouter();
  if (!hasHydrated) {
    return null;
  }
  useEffect(() => {
    if (hasHydrated && !authorized) {
      router.push("/login");
    }
  }, [authorized, hasHydrated, router]);

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
