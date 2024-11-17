export interface IPostReview {
  contents: string;
  stars: number;
}

export interface IReview {
  reviewId: number;
  userId: number;
  userName: string;
  contents: string;
  stars: number;
  createdAt: string;
  isMyReview: boolean;
}

export interface IReviewList {
  reviews: IReview[];
  countOfReviews: number;
  reviewRating: number;
  isMatched: boolean;
  isOpen: boolean;
}

export type TReviewFilter = "LATEST" | "RATING_DESC" | "RATING_ASC";
