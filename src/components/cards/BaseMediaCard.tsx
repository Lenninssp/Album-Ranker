// components/cards/BaseMediaCard.tsx
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Rating,
  RatingBackground,
  RatingDimmerBackground,
} from "@/types/ratingColor";
import { CardActions } from "./CardActions";
import { Dialog } from "../ui/dialog";

interface BaseMediaCardProps {
  children: ReactNode;
  headerImage?: string | null;
  title: string;
  subtitle?: string | null;
  year?: string | number | null;
}

export const BaseMediaCard = ({
  children,
  headerImage,
  title,
  subtitle,
  year,
}: BaseMediaCardProps) => {
  const [selectedColor, setSelectedColor] = useState<Rating>(Rating.Undefined);
  const [addTag, setAddTag] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");
  const [commentary, setCommentary] = useState<string>("");

  const handleSaveTag = () => {
    setAddTag((prev) => !prev);
  };

  const handleSaveCommentary = (value: string) => {
    if (value === "") return;
    setCommentary(value)
  }
  return (
    <Dialog>
      <div
        className={cn(
          "w-full h-fit p-5 flex flex-col gap-4 rounded-md transition relative",
          RatingDimmerBackground[selectedColor]
        )}
      >
        <CardActions
          handleSelectColor={(key) => setSelectedColor(key)}
          addTag={addTag}
          tag={tag}
          handleModifyTag={(value) => setTag(value)}
          handleSaveTag={handleSaveTag}
          handleActivateTag={() => setAddTag((prev) => !prev)}
          commentary={commentary}
          handleSaveCommentary={(value) => handleSaveCommentary(value)}
        />

        <div className="flex gap-4">
          {headerImage ? (
            <img
              src={headerImage}
              alt={title}
              className="h-32 w-32 rounded object-cover"
            />
          ) : (
            <div className="h-32 w-32 rounded object-cover text-center bg-gray-50 items-center justify-center flex">
              No image available
            </div>
          )}
          <div className="flex flex-col flex-1 justify-center">
            <div className="text-3xl font-bold truncate">{title}</div>
            {subtitle && <div>{subtitle}</div>}
            {year && <div className="text-sm opacity-80">{year}</div>}
          </div>
        </div>

        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </Dialog>
  );
};
