"use client";
import { LoginComponent } from "@/components/auth/login";
import { SignupComponent } from "@/components/auth/signup";
import { DefaultFrame } from "@/components/default-frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSession } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [signMethod, setSignMethod] = useState<"login" | "signup">("login")

  const handleChangeSignMethod = (checked: boolean) => {
    if (checked) {
      setSignMethod("signup")
    }
    else {
      setSignMethod("login")
    }
  }
  return (
    <DefaultFrame>
      <div className="h-screen w-full flex items-center justify-center flex-col gap-3">
        <div className="flex items-center space-x-2">
          <Label htmlFor="airplane-mode">Login</Label>
          <Switch id="login-signup" className="cursor-pointer" onCheckedChange={(e) => handleChangeSignMethod(e)}/>
          <Label htmlFor="airplane-mode">Signup</Label>
        </div>
        {
          signMethod === "login" ? <LoginComponent /> : <SignupComponent />
        }
      </div>
    </DefaultFrame>
  );
}
