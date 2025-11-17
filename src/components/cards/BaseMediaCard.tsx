import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Rating,
  RatingBackground,
  RatingDimmerBackground,
} from "@/types/ratingColor";
import { CardActions } from "./CardActions";
import { Dialog } from "../ui/dialog";
import { toast } from "sonner";
import { useBaseMediaCard } from "@/hooks/useBaseMediaCard";
import {
  AllElements,
  AllElementsEdited,
  TypeOfElement,
  UserMetadata,
} from "@/types/music";
import { extractMetadata, MediaCardConfig } from "@/types/mediaCard";
import { Renderer, useMediaCardContext } from "@/context/media-card-context";
import {CommunityCardActions } from "./community-actions";

interface BaseMediaCardProps {
  type: TypeOfElement;
  element: AllElementsEdited;
  config: MediaCardConfig;
  simplified?: boolean;
  children?: ReactNode;
}

export const BaseMediaCard = ({
  type,
  element,
  config,
  simplified,
  children,
}: BaseMediaCardProps) => {
  const { renderer } = useMediaCardContext();
  const metadata = extractMetadata(element);

  const {
    selectedColor,
    handleChangeSelectedColor,
    addTag,
    tag,
    handleSaveTag,
    commentary,
    handleSaveCommentary,
    handleChangeTag,
    toggleTag,
    handleDeleteElement,
    publicPost,
    handleChangePublicStatus,
  } = useBaseMediaCard(type, element, metadata);

  return (
    <Dialog>
      <div
        className={cn(
          "w-full h-fit p-5 flex flex-col gap-4 rounded-md transition relative",
          RatingDimmerBackground[selectedColor]
        )}
      >
        {renderer === Renderer.LIBRARY ? (
          <CardActions
            handleSelectColor={(key) => handleChangeSelectedColor(key)}
            addTag={addTag}
            tag={tag}
            handleModifyTag={(value) => handleChangeTag(value)}
            handleSaveTag={handleSaveTag}
            handleActivateTag={toggleTag}
            commentary={commentary}
            handleSaveCommentary={(value) => handleSaveCommentary(value)}
            handleDeleteElement={handleDeleteElement}
            simplified={simplified}
            publicPost={publicPost}
            changePublic={handleChangePublicStatus}
          />
        )
      :
      (
        <CommunityCardActions element={element} type={type} />
      )}

        <div className="flex gap-4">
          {config.headerImage ? (
            <img
              src={config.headerImage}
              alt={config.title}
              className={cn(
                "h-32 w-32 rounded object-cover",
                simplified && "h-16 w-16"
              )}
            />
          ) : (
            <div
              className={cn(
                "h-32 w-32 rounded object-cover text-center bg-gray-50 items-center justify-center flex",
                simplified && "h-16 w-16 text-xs"
              )}
            >
              No image available
            </div>
          )}

          <div
            className={cn(
              "flex flex-col flex-1 justify-center",
              simplified && "gap-4 flex-row items-center justify-start"
            )}
          >
            <div className="text-3xl font-bold truncate">{config.title}</div>
            {config.subtitle && <div>{config.subtitle}</div>}
            {config.year && (
              <div className="text-sm opacity-80">{config.year}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className={cn(
              "text-sm leading-relaxed max-h-44 overflow-auto",
              simplified && "max-h-28"
            )}
          >
            {config.description}
          </div>
          {config.genre && <div className="opacity-75">{config.genre}</div>}
          {children}
        </div>
      </div>
    </Dialog>
  );
};
