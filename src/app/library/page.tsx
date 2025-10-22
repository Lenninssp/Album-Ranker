"use client"

import { DefaultFrame } from "@/components/default-frame"
import { LibraryComponent } from "@/components/library";

const Library = () => {


  return (
    <DefaultFrame className="flex flex-col items-center justify-center overflow-auto">
      <div className="text-4xl font-bold flex-1 flex h-full items-center">Library</div>
      <LibraryComponent className=" flex-2" />
    </DefaultFrame>
  )
}

export default Library;