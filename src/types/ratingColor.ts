export enum Rating {
  Hate = "hate",
  Neutral = "neutral",
  Love = "love",
  Adore = "adore",
  Undefined = "undefined",
}

export const RatingBackground: Record<Rating, string> = {
  [Rating.Hate]: "bg-red-600",
  [Rating.Neutral]: "bg-yellow-400",
  [Rating.Love]: "bg-green-400",
  [Rating.Adore]: "bg-blue-500",
  [Rating.Undefined]: "bg-gray-700",
};

export const RatingDimmerBackground: Record<Rating, string> = {
  [Rating.Hate]: "bg-red-200",
  [Rating.Neutral]: "bg-yellow-200",
  [Rating.Love]: "bg-green-200",
  [Rating.Adore]: "bg-blue-200",
  [Rating.Undefined]: "bg-gray-200",
};

export const RatingText: Record<Rating, string> = {
  [Rating.Hate]: "text-red-100",
  [Rating.Neutral]: "text-gray-100",
  [Rating.Love]: "text-pink-100",
  [Rating.Adore]: "text-purple-100",
  [Rating.Undefined]: "text-zinc-300",
};