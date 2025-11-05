import { useSavedItems } from "@/context/savedItems";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const TagsFilter = ({
  action,
  selected
}: {
  action: (tag: string | null) => void;
  selected?: string | null
}) => {
  const { tags } = useSavedItems();

  return (
    <div className="flex gap-3 flex-wrap">
      {tags.map(
        (tag) =>
          tag.length !== 0 && (
            <Button
              key={tags.indexOf(tag)}
              onClick={() => action(tag.toString())}
              className={cn("flex gap-3 cursor-pointer bg-gray-500", selected === tag && "bg-black")}
            >
              <Icon icon={"material-symbols:folder"} />
              <div>{tag}</div>
            </Button>
          )
      )}
      <button
        className="cursor-pointer"
        onClick={() => action(null)}
        aria-label="Clear filter"
      >
        <X />
      </button>
    </div>
  );
};
