import { useEffect, useRef } from "react";
import { signOut } from 'next-auth/react'

export function useIdelLogout(ms = 15 * 60 * 1000) {
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const reset = () => {
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        signOut({ callbackUrl: "/login" });
      }, ms)
    };

    reset();

    const events = ["click", "keydown", "mousemove", "scroll", "touchstart"];
    events.forEach(ev => window.addEventListener(ev, reset, { passive: true}));

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
      events.forEach(ev => window.removeEventListener(ev, reset))
    }
  }, [ms]);
}