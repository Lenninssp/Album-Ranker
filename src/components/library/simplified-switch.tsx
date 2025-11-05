import { Switch } from "../ui/switch";
import { AccordionTrigger } from "../ui/accordion";
import { TypeOfElement } from "@/types/music";
import { SimplySwitchProps } from "@/types/library-types";

export const SimplifiedSwitch = ({
  element,
  state,
  dispatch,
}: SimplySwitchProps) => {
  const checked =
    element === TypeOfElement.ARTIST
      ? state.artistSimplified
      : element === TypeOfElement.ALBUM
      ? state.albumSimplified
      : state.trackSimplified;

  return (
    <AccordionTrigger className="flex flex-col w-full justify-between items-center cursor-pointer border-b">
      <div className="flex w-full justify-between items-center">
        <div className="text-2xl font-semibold">{element}</div>
        <div className="flex gap-2 items-center">
          <div>Simplified</div>
          <Switch
            className="cursor-pointer"
            checked={checked}
            onCheckedChange={(checked: boolean) =>
              dispatch({ element, value: checked })
            }
          />
        </div>
      </div>
    </AccordionTrigger>
  );
};