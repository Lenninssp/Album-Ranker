import { User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";

import { useSavedItems } from "@/context/savedItems";
import { useSession } from "next-auth/react";

export const AccountEdit = () => {
  const { data: session } = useSession();
  const { getAlbums, getArtists, getTracks, getSubscribers } = useSavedItems();
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [wantsToReset, setWantsToReset] = useState<boolean>(false);

  const handleUpdatePassword = async () => {
    try {
      const response = await fetch("/api/auth/account/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: previousPassword,
          newPassword: newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("There was an error changing your passwod");
      }
      setWantsToReset((prev) => !prev);
    } catch (error: any) {
      throw new Error("There was an error:", error);
    }
  }


  return (
    <div className=" h-full w-full flex items-center justify-center gap-4">
      <div className=" h-fit w-fit bg-gray-200 rounded-full p-10">
        <User className=" h-32 w-32" />
      </div>
      <div className="flex flex-col w-fit gap-4">
        <div className="flex gap-2">
          <div className=" font-bold">User Id:</div>
          <div>{session?.user.id}</div>
        </div>
        <div className="flex gap-2">
          <div className=" font-bold">Name:</div>
          <div>{session?.user.name}</div>
        </div>

        <div className="flex gap-2">
          <div className=" font-bold"># rated songs:</div>
          <div>
            {getAlbums().length + getArtists().length + getTracks().length}
          </div>
        </div>
         <div className="flex gap-2">
          <div className=" font-bold">Subscribers:</div>
          <div>
            {getSubscribers().length}
          </div>
        </div>

        <div className="flex gap-2">
          {wantsToReset ? (
            <div className="flex flex-col gap-2 items-center">
              <Input
                type="password"
                value={previousPassword}
                placeholder="current password"
                onChange={(e) => setPreviousPassword(e.target.value)}
              />
              <Input
                type="password"
                value={newPassword}
                placeholder="new password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Button
                className=" cursor-pointer"
                onClick={handleUpdatePassword}
              >
                Update password
              </Button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Button
                className=" cursor-pointer"
                onClick={() => setWantsToReset((prev) => !prev)}
              >
                Reset Password
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
