export type commnetType = {
  commentDate: string;
  commentUserName: string;
  commnetImage: string;
  comment: string;
};

export type cardImage = {
  path: string;
};

export type cardHeader = {
  userName: string;
  postDate: string;
};

export type Post = {
  userName: string;
  postDate: string;
  postCaption: string;
  comments?: commnetType[];
};
