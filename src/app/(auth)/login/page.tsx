"use client";
import { DefaultFrame } from "@/components/default-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const { authorized, toggle } = useSession();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorVisible, setErrorVisible] = useState<string | null>(null);

  const router = useRouter();

  const correctUser = process.env.NEXT_PUBLIC_USER;
  const correctPassword = process.env.NEXT_PUBLIC_PASSWORD;

  const authorize = () => {
    if (username === correctUser && password === correctPassword) {
      toggle();
      setErrorVisible(null);
    } else {
      setErrorVisible("Sorry, either your username or password are incorrect");
    }
  };

  return (
    <DefaultFrame>
      <div className="h-screen w-full flex items-center justify-center flex-col gap-3">
        {errorVisible && <div className="text-red-400">{errorVisible}</div>}

        <div>Please insert your user information to login</div>

        <div className=" flex gap-3">
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onClick={authorize} className="cursor-pointer">
          Login
        </Button>
      </div>
    </DefaultFrame>
  );
}
