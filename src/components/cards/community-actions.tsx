import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { useState, useMemo } from "react";
import {
  AlbumEdited,
  ArtistEdited,
  Interaction,
  TrackEdited,
} from "@/generated/prisma";
import { AllElementsEdited, TypeOfElement } from "@/types/music";
import { useSavedItems } from "@/context/savedItems";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

function getElementId(
  element: AllElementsEdited,
  type: TypeOfElement
): number | null {
  switch (type) {
    case TypeOfElement.ALBUM:
      return Number((element as AlbumEdited).idAlbum) ?? null;

    case TypeOfElement.ARTIST:
      return Number((element as ArtistEdited).idArtist) ?? null;

    case TypeOfElement.TRACK:
      return Number((element as TrackEdited).idTrack) ?? null;
  }
}
function createTargetIds(elementId: number | null, type: TypeOfElement) {
  return {
    trackEditedId: type === TypeOfElement.TRACK ? elementId : null,
    albumEditedId: type === TypeOfElement.ALBUM ? elementId : null,
    artistEditedId: type === TypeOfElement.ARTIST ? elementId : null,
  };
}
function generateTempId(): number {
  return -Math.floor(Date.now() / 1000);
}

export const CommunityCardActions = ({
  element,
  type,
}: {
  element: AllElementsEdited;
  type: TypeOfElement;
}) => {
  const { data: session } = useSession();
  const myUserId = Number(session?.user?.id) || 0;
  const { getInteractions, setInteraction } = useSavedItems();

  const targetIds = useMemo(() => {
    const elementId = getElementId(element, type);
    return createTargetIds(elementId, type);
  }, [element, type]);

  const existing = useMemo(() => {
    const interactions = getInteractions();
    return interactions.find(
      (i) =>
        i.userId === myUserId &&
        i.trackEditedId === targetIds.trackEditedId &&
        i.albumEditedId === targetIds.albumEditedId &&
        i.artistEditedId === targetIds.artistEditedId
    );
  }, [getInteractions, myUserId, targetIds]);

  const [newComment, setNewComment] = useState(existing?.comment ?? "");

  const ensureLoggedIn = (): boolean => {
    if (!myUserId) {
      toast("Sign in required", {
        description: "You must be logged in to comment or like.",
      });
      return false;
    }
    return true;
  };

  const createInteractionPayload = (
    comment: string | null,
    liked: boolean
  ): Interaction => ({
    id: existing?.id ?? generateTempId(),
    userId: myUserId,
    ...targetIds,
    comment,
    liked,
    createdAt: existing?.createdAt ?? new Date(),
  });

  const handleSaveComment = () => {
    if (!ensureLoggedIn()) return;

    const trimmedComment = newComment.trim();
    const payload = createInteractionPayload(
      trimmedComment === "" ? null : trimmedComment,
      existing?.liked ?? false
    );

    setInteraction(payload);
    toast("Saved", { description: "Your comment was saved." });
  };

  const toggleLike = () => {
    if (!ensureLoggedIn()) return;

    const payload = createInteractionPayload(
      existing?.comment ?? null,
      !(existing?.liked ?? false)
    );

    setInteraction(payload);
  };

  const isLiked = existing?.liked ?? false;
  const hasComment = !!existing?.comment;

  return (
    <div className="flex flex-col w-fit justify-end gap-2 absolute top-3 right-3 z-10">
      <div className="flex w-full justify-end gap-2">
        <Button
          className="cursor-pointer"
          variant={isLiked ? "default" : "secondary"}
          onClick={toggleLike}
          aria-label={isLiked ? "Unlike" : "Like"}
          title={isLiked ? "Unlike" : "Like"}
        >
          <Icon
            icon={
              isLiked
                ? "material-symbols:favorite"
                : "material-symbols:favorite-outline"
            }
          />
        </Button>

        <DialogTrigger asChild>
          <Button
            className="cursor-pointer"
            variant={hasComment ? "default" : "secondary"}
            aria-label={hasComment ? "Edit comment" : "Add comment"}
            title={hasComment ? "Edit comment" : "Add comment"}
          >
            <Icon icon="material-symbols:comment" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {hasComment ? "Edit your comment" : "Add a comment"}
            </DialogTitle>
            <DialogDescription>
              Share your thoughts about this {type.toLowerCase()}.
            </DialogDescription>
          </DialogHeader>

          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write something insightful…"
            rows={4}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="cursor-pointer" onClick={handleSaveComment}>
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </div>
    </div>
  );
};
