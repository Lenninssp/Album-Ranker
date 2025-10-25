import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef } from "react";

export function useIdleLogout(ms = 15 * 60 * 1000) {
  const { status } = useSession();
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (status !== "authenticated") return; // only activate if logged in

    const reset = () => {
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        signOut({ callbackUrl: "/login" });
      }, ms);
    };

    reset();

    const events = ["click", "keydown", "mousemove", "scroll", "touchstart"];
    events.forEach((ev) => window.addEventListener(ev, reset, { passive: true }));

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
      events.forEach((ev) => window.removeEventListener(ev, reset));
    };
  }, [ms, status]);
}