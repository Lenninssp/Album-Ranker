"use client"
import { DefaultFrame } from "@/components/default-frame";

const Playground = () => {
  return (
    <DefaultFrame>
      <div className=" h-full w-full flex items-center flex-col justify-center">
        <div className=" text-4xl font-bold ">This is your playground</div>
      </div>
    </DefaultFrame>
  );
};

export default Playground;
