import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { useSession } from "@/context/auth";
import Image from "next/image";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const authorized = useSession((state) => state.authorized);
  const toggle = useSession((state) => state.toggle);

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          <Image src={"logo.svg"} alt="logo" width={60} height={60} />
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        {!authorized ? (
          <div className="hidden md:flex gap-4 items-center">
            <Link href={"/login"}>
              <div>SIGN ING</div>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex gap-4 items-center">
            <Link href={"/"}>
              <div>HOME</div>
            </Link>
            <Link href={"/search"}>
              <div>SEARCH</div>
            </Link>
            <Link href={"/playground"}>
              <div>PLAYGROUND</div>
            </Link>
            <Link href={"/my-account"}>
              <div>MY ACCOUNT</div>
            </Link>
            <Button onClick={toggle} className=" cursor-pointer">
              LOGOUT
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
