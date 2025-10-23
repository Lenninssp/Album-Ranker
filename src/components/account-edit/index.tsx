import { User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { useSession } from "@/context/auth";
import { useSavedItems } from "@/context/savedItems";

export const AccountEdit = () => {
  const { getId, getName } = useSession();
  const { getAlbums, getArtists, getTracks} = useSavedItems()
  const [wantsToReset, setWantsToReset] = useState<boolean>(false);

  return (
    <div className=" h-full w-full flex items-center justify-center gap-4">
      <div className=" h-fit w-fit bg-gray-200 rounded-full p-10">
        <User className=" h-32 w-32" />
      </div>
      <div className="flex flex-col w-fit gap-4">
        <div className="flex gap-2">
          <div className=" font-bold">User Id:</div>
          <div>{getId()}</div>
        </div>
        <div className="flex gap-2">
          <div className=" font-bold">Name:</div>
          <div>{getName()}</div>
        </div>

        <div className="flex gap-2">
          <div className=" font-bold"># rated songs:</div>
          <div>{getAlbums().length + getArtists().length + getTracks().length}</div>
        </div>

        <div className="flex gap-2">
          {wantsToReset ? (
            <div className="flex gap-2 items-center">
              <Input type="password"/>
              <Button className=" cursor-pointer" onClick={() => setWantsToReset((prev) => !prev)}>Update password</Button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <div className=" font-bold">Password:</div>
              <div>Not defined</div>
              <Button className=" cursor-pointer" onClick={() => setWantsToReset((prev) => !prev)}>Reset Password</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
