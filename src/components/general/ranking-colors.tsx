import { Rating, RatingBackground } from "@/types/ratingColor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";

interface RankingColorsInterface {
  action: (key: Rating) => void;
  simplified?: boolean;
  selected?: Rating | null;
  className?: string;
}
export const RankingColors = ({
  action,
  simplified = false,
  selected,
  className,
}: RankingColorsInterface) => {
  return (
    <>
      {(Object.entries(RatingBackground) as [Rating, string][]).map(
        ([key, bg]) => (
          <TooltipProvider key={key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  role="button"
                  onClick={() => action(key)}
                  className={cn(
                    "h-8 w-8 rounded-full transition hover:scale-110 cursor-pointer border border-white hover:brightness-125",
                    bg,
                    selected === key && "border-2 border-black",
                    simplified && "h-4 w-4",
                    className
                  )}
                />
              </TooltipTrigger>
              <TooltipContent>{key}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}
    </>
  );
};
