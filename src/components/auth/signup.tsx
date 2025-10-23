import { useSession } from "@/context/auth";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { User } from "@/generated/prisma";

export const SignupComponent = () => {
  const { authorized, toggle, setId } = useSession();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [errorVisible, setErrorVisible] = useState<string | null>(null);

  const router = useRouter();

  const createUser = async () => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          action: "register",
          email: username,
          password: password,
          name: name,
        }),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      toggle();
      const data:User = await response.json();
      setId(data.id);
    } catch (e) {
      console.error("There was an error creating the user", e);
    }
  };

  const authorize = () => {
    if (password === password2) {
      setErrorVisible(null);
      createUser();
      router.push("/");
    } else {
      setErrorVisible("Sorry, the passwords are not the same");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-3">
      <div className=" text-4xl font-bold">Sign up</div>

      {errorVisible && <div className="text-red-400">{errorVisible}</div>}

      <div>Please insert your user information to Sign up</div>

      <div className=" flex flex-col gap-3">
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="email"
        />
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <Input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          placeholder="repeat password"
        />
      </div>

      <Button onClick={authorize} className="cursor-pointer">
        Signup
      </Button>
    </div>
  );
};
