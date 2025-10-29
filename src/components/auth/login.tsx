import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Icon } from "@iconify/react";

export const LoginComponent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorVisible, setErrorVisible] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setErrorVisible("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorVisible(null);
    
    try {
      await signIn("google", {
        callbackUrl: "/",
      });
    } catch (error) {
      setErrorVisible("Failed to sign in with Google");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-full flex items-center justify-center flex-col gap-3"
    >
      <div className=" text-4xl font-bold">Log in</div>

      {errorVisible && <div className="text-red-400">{errorVisible}</div>}

      <div>Please insert your user information to login</div>

      <div className=" flex gap-3">
        <Input
          type="text"
          value={username}
          placeholder="email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" className="cursor-pointer">
        Login
      </Button>
      <div className="flex items-center gap-3 w-full max-w-md">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="cursor-pointer flex items-center gap-2"
        onClick={handleGoogleSignIn}
      >
        <Icon icon={"logos:google-icon"}/>
        Continue with Google
      </Button>
    </form>
  );
};
