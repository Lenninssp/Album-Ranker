"use client"
import { AccountEdit } from "@/components/account-edit";
import { DefaultFrame } from "@/components/default-frame";

const MyAccount = () => {
  return (
    <DefaultFrame className=" items-center h-fit justify-center flex flex-col gap-5">
      <div className="text-4xl font-bold">Modify my account</div>
      <AccountEdit/>
    </DefaultFrame>
  );
};

export default MyAccount;
