import { useSession } from "@/context/auth";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const LoginComponent = () => {
  const { authorized, toggle } = useSession();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorVisible, setErrorVisible] = useState<string | null>(null);

  const correctUser = process.env.NEXT_PUBLIC_USER;
  const correctPassword = process.env.NEXT_PUBLIC_PASSWORD;

  const router = useRouter();

  const authorize = () => {
    if (username === correctUser && password === correctPassword) {
      toggle();
      setErrorVisible(null);
      router.push("/");
    } else {
      setErrorVisible("Sorry, either your username or password are incorrect");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-3">
      <div className=" text-4xl font-bold">Log in</div>

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
  );
};
