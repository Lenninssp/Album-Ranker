import { AllElements, AllElementsEdited, TypeOfElement } from "@/types/music";
import { BaseMediaCard } from "./BaseMediaCard";
import { getMediaCardConfig } from "@/types/mediaCard";

interface MediaCardProps {
  type: TypeOfElement;
  element: AllElementsEdited;
  simplified?: boolean;
  fallbackImage?: string;
}

export const MediaCard = ({ 
  type, 
  element, 
  simplified, 
  fallbackImage 
}: MediaCardProps) => {
  const config = getMediaCardConfig(element, type, fallbackImage);
  
  return (
    <BaseMediaCard
      type={type}
      element={element}
      config={config}
      simplified={simplified}
    />
  );
};