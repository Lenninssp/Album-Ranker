import { useSession } from "@/context/auth";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const SignupComponent = () => {
   const { authorized, toggle } = useSession();
  
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    const [errorVisible, setErrorVisible] = useState<string | null>(null);

    const router = useRouter();
  
    const authorize = () => {
      if (password === password2 ) {
        toggle();
        setErrorVisible(null);
        router.push("/")
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
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>

        <Button onClick={authorize} className="cursor-pointer">
          Signup
        </Button>
      </div>
  )
}