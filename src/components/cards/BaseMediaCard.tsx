// components/cards/BaseMediaCard.tsx
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Rating,
  RatingBackground,
  RatingDimmerBackground,
} from "@/types/ratingColor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  return (
    <div
      className={cn(
        "w-full h-fit p-5 flex flex-col gap-4 rounded-md transition",
        RatingDimmerBackground[selectedColor]
      )}
    >
      <div className="flex w-full justify-end gap-2">
        {(Object.entries(RatingBackground) as [Rating, string][]).map(
          ([key, bg]) => (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    role="button"
                    onClick={() => setSelectedColor(key)}
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

      <div className="flex gap-4">
        {headerImage && (
          <img
            src={headerImage}
            alt={title}
            className="h-32 w-32 rounded object-cover"
          />
        )}
        <div className="flex flex-col flex-1 justify-center">
          <div className="text-3xl font-bold truncate">{title}</div>
          {subtitle && <div>{subtitle}</div>}
          {year && <div className="text-sm opacity-80">{year}</div>}
        </div>
      </div>

      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};