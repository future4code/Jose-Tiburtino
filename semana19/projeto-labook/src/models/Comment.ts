export type Comment = {
  id: string;
  user_id: string;
  post_id: string;
  comment: string;
};

export type CommentDTO = {
  token: string;
  post_id: string;
  comment: string;
};
