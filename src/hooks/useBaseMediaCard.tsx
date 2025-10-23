import { useSession } from "@/context/auth";
import { useSavedItems } from "@/context/savedItems";
import {
  AlbumEdited,
  AllElements,
  ArtistEdited,
  TrackEdited,
  TypeOfElement,
  UserMetadata,
} from "@/types/music";
import { Rating } from "@/types/ratingColor";
import { useState } from "react";
import { toast } from "sonner";

export const useBaseMediaCard = (
  type: TypeOfElement,
  element: AllElements,
  metadata?: UserMetadata
) => {
  const {
    addAlbum,
    addArtist,
    addTrack,
    deleteAlbum,
    deleteArtist,
    deleteTrack,
  } = useSavedItems();
  const userId = useSession();

  const [selectedColor, setSelectedColor] = useState<Rating>(
    metadata?.rating ?? Rating.Undefined
  );
  const [addTag, setAddTag] = useState<boolean>(false);
  const [tag, setTag] = useState<string>(metadata?.tag ?? "");
  const [commentary, setCommentary] = useState<string>(
    metadata?.commentary ?? ""
  );

  const saveProgress = (
    overrides?: Partial<{ tag: string; commentary: string; rating: Rating }>
  ) => {
    const baseData = {
      ...element,
      commentary: overrides?.commentary ?? commentary,
      tag: overrides?.tag ?? tag,
      rating: overrides?.rating ?? selectedColor,
      includesMetadata: true,
    };
    const myUserId = userId.getId();

    if (!myUserId) return;
    switch (type) {
      case TypeOfElement.ALBUM:
        addAlbum(baseData as AlbumEdited, myUserId);
        break;
      case TypeOfElement.ARTIST:
        addArtist(baseData as ArtistEdited, myUserId);
        break;
      case TypeOfElement.TRACK:
        addTrack(baseData as TrackEdited, myUserId);
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

  const handleDeleteElement = () => {
    const myUserId = userId.getId();

    if (!myUserId) return;
    switch (type) {
      case TypeOfElement.ALBUM:
        deleteAlbum((element as AlbumEdited).idAlbum, myUserId);
        break;
      case TypeOfElement.ARTIST:
        deleteArtist((element as ArtistEdited).idArtist, myUserId);
        break;
      case TypeOfElement.TRACK:
        deleteTrack((element as TrackEdited).idTrack, myUserId);
        break;
    }

    toast("Deleted!", { description: "Item deleted successfully." });
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
    handleDeleteElement
  };
};
