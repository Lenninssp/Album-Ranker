import { useSavedItems } from "@/context/savedItems";
import { AlbumEdited, AllElements, ArtistEdited, TrackEdited, TypeOfElement } from "@/types/music";
import { Rating } from "@/types/ratingColor";
import { useState } from "react";
import { toast } from "sonner";

export const useBaseMediaCard = (type: TypeOfElement, element: AllElements) => {
  const { addAlbum, addArtist, addTrack } = useSavedItems();

  const [selectedColor, setSelectedColor] = useState<Rating>(Rating.Undefined);
  const [addTag, setAddTag] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");
  const [commentary, setCommentary] = useState<string>("");

  const saveProgress = (overrides?: Partial<{ tag: string; commentary: string; rating: Rating }>) => {
    const baseData = {
      ...element,
      commentary: overrides?.commentary ?? commentary,
      tag: overrides?.tag ?? tag,
      rating: overrides?.rating ?? selectedColor,
    };

    switch (type) {
      case TypeOfElement.ALBUM:
        addAlbum(baseData as AlbumEdited);
        break;
      case TypeOfElement.ARTIST:
        addArtist(baseData as ArtistEdited);
        break;
      case TypeOfElement.TRACK:
        addTrack(baseData as TrackEdited);
        break;
    }

    toast("Saved!", { description: "Item saved successfully." });
  };

  const handleSaveTag = () => {
    setAddTag((prev) => !prev);
    saveProgress(); 
  };

  const handleSaveCommentary = (value: string) => {
    if (value === "") return;
    setCommentary(value);
    saveProgress({ commentary: value });
    toast("Success", { description: "The commentary has been saved" });
  };

  const handleChangeSelectedColor = (newColor: Rating) => {
    setSelectedColor(newColor);
    saveProgress({ rating: newColor });
  };

  const handleChangeTag = (newTag: string) => {
    setTag(newTag);
  };

  const toggleTag = () => setAddTag((prev) => !prev);

  return {
    handleSaveTag,
    handleSaveCommentary,
    selectedColor,
    addTag,
    tag,
    commentary,
    handleChangeSelectedColor,
    handleChangeTag,
    toggleTag,
  };
};