import { cn } from "@/lib/utils";

interface EmptyLibraryProps {
  className?: string;
}

export const EmptyLibrary = ({ className }: EmptyLibraryProps) => {
  return (
    <div className={cn("text-xl", className)}>
      Your library is empty. Please add some elements (track, album, artist) to
      see something here.
    </div>
  );
};