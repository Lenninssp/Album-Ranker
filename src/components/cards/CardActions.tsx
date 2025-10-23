import { cn } from "@/lib/utils";
import { Rating, RatingBackground } from "@/types/ratingColor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

interface CardActionsProps {
  handleSelectColor: (key: Rating) => void;
  handleModifyTag: (value: string) => void;
  handleSaveTag: () => void;
  handleActivateTag: () => void;
  tag: string;
  addTag: boolean;
  commentary: string;
  handleSaveCommentary: (value: string) => void;
  handleDeleteElement: () => void;
}
export const CardActions = ({
  handleSelectColor,
  handleModifyTag,
  handleSaveTag,
  handleActivateTag,
  tag,
  addTag,
  commentary,
  handleSaveCommentary,
  handleDeleteElement
}: CardActionsProps) => {
  const [newDialog, setNewDialog] = useState<string>(commentary);
  return (
    <div className="flex flex-col w-full justify-end gap-2 absolute top-3 -left-3 z-10">
      <div className="flex w-full justify-end gap-2">
        {(Object.entries(RatingBackground) as [Rating, string][]).map(
          ([key, bg]) => (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    role="button"
                    onClick={() => handleSelectColor(key)}
                    className={cn(
                      "h-8 w-8 rounded-full transition hover:scale-110 cursor-pointer border border-white hover:brightness-125",
                      bg
                    )}
                  />
                </TooltipTrigger>
                <TooltipContent>{key}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        )}
      </div>
      <div className="flex w-full justify-end gap-2">
        {addTag ? (
          <div className=" flex flex-col gap-2">
            <Input
              value={tag}
              onChange={(e) => handleModifyTag(e.target.value)}
              className=" bg-white"
            />
            <Button className=" cursor-pointer" onClick={handleSaveTag}>
              Save
            </Button>
          </div>
        ) : (
          <div className=" flex gap-3 items-center">
            <div className="max-w-16 text-xs truncate">{tag}</div>
            <Button
              className=" cursor-pointer"
              onClick={() => handleActivateTag()}
            >
              Add Tag
            </Button>
          </div>
        )}
      </div>

      <div className="flex w-full justify-end gap-2">
        <Button className="cursor-pointer" onClick={handleDeleteElement} >
            <Icon
              icon={"material-symbols:delete-forever"}
              className="text-red-400 cursor-pointer"
            />
          </Button>
        <DialogTrigger asChild>
          <Button className="cursor-pointer">
            <Icon
              icon={"material-symbols:book-ribbon"}
              className="group-hover:text-white cursor-pointer"
            />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit commentary</DialogTitle>
            <DialogDescription>
              Make changes to your commentary here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={newDialog}
            onChange={(e) => setNewDialog(e.target.value)}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button className=" cursor-pointer">Cancel</Button>
            </DialogClose>
            <Button
              className=" cursor-pointer"
              onClick={() => handleSaveCommentary(newDialog)}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </div>
  );
};
