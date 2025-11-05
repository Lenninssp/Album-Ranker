"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { YoutubeIcon } from "lucide-react";

type NavLink = {
  href: string,
  label: string,
  icon?: string | React.ReactNode;
}

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.push("/login");
  };

  const navLinks: NavLink[] = status === "unauthenticated"
    ? [
        { href: "/login", label: "SIGN IN" },
      ]
    : [
        { href: "/", label: "HOME" },
        { href: "/community", label: "COMMUNITY" },
        { href: "/search", label: "SEARCH" },
        { href: "/library", label: "LIBRARY" },
        { href: "/my-account", label: "MY ACCOUNT" },
        { href: "/youtube-library", label: "YTLIB", icon: <YoutubeIcon/>},
      ];

  const NavItems = ({ onClick }: { onClick?: () => void }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="hover:text-gray-600 transition-colors"
        >
          {link.icon ?? link.label}
        </Link>
      ))}
      {status === "authenticated" && (
        <Button onClick={handleLogout} className="cursor-pointer">
          LOGOUT
        </Button>
      )}
    </>
  );

  return (
    <nav className="flex items-center justify-between bg-white px-4 py-4 h-20 shadow-md relative">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={60} height={60} />
      </Link>

      {/* Hamburger (mobile only) */}
      <button
        className="z-50 flex flex-col justify-between w-8 h-8 md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
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
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <NavItems />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-20 top-0 left-0 w-full bg-white flex flex-col items-center justify-center gap-6 py-10 transition-all duration-300 md:hidden shadow-lg ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <NavItems onClick={() => setOpen(false)} />
      </div>
    </nav>
  );
};