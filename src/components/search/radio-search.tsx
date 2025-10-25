import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { SearchType } from "@/app/(authenticated)/search/page";

interface RadioSearchProps {
  value: SearchType;
  onValueChange: (value: SearchType) => void;
}

export const RadioSearch = ({ value, onValueChange }: RadioSearchProps) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={(val) => onValueChange(val as SearchType)} // ✅ notify parent
      className="flex flex-col items-center gap-6"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem className="cursor-pointer" value="album" id="r1" />
        <Label htmlFor="r1">Album</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem className="cursor-pointer" value="track" id="r2" />
        <Label htmlFor="r2">Track</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem className="cursor-pointer" value="artist" id="r3" />
        <Label htmlFor="r3">Artist</Label>
      </div>
    </RadioGroup>
  );
};