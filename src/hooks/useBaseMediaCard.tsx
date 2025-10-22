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

  const handleSaveTag = () => {
    setAddTag((prev) => !prev);
    saveProgress();
  };

  const handleSaveCommentary = (value: string) => {
    if (value === "") return;
    setCommentary(value);
    saveProgress();
    toast("Success", {
      description: "The commentary has been saved",
    });
  };

  const handleChangeSelectedColor = (newColor: Rating) => {
    setSelectedColor(newColor);
    saveProgress();
  };

  const handleChangeTag = (newTag: string) => {
    setTag(newTag);
    saveProgress();
  };

  const toggleTag = () => {
    setAddTag((prev) => !prev);
  };


  const saveProgress = () => {
    const baseData = {
      ...element,
      commentary,
      tag,
      rating: selectedColor,
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
