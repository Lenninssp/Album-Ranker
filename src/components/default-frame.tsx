import { useSession } from "@/context/auth";
import { NavBar } from "./navbar"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const DefaultFrame = ({children}: {children: React.ReactNode}) => {
  const authorized = useSession((state) => state.authorized)
  const router = useRouter();
    useEffect(() => {
      if (!authorized) {
        router.push("/login");
      }
    }, [authorized, router]);
  return (
    <div className=" h-full w-full flex flex-col">
      <NavBar />
      {children}
    </div>
  )
}