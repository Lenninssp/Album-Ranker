"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useSavedItems } from "@/context/savedItems";
import { useIdleLogout } from "@/hooks/useIdleLogout"; 

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const { loadUserData } = useSavedItems();
  const hasLoaded = useRef(false);

  useIdleLogout();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id && !hasLoaded.current) {
      hasLoaded.current = true;
      loadUserData(Number(session.user.id));
    }
  }, [status, session?.user?.id, loadUserData]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return null;
  }

  return <>{children}</>;
}