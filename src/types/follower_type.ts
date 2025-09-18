export type Follower_type = {
  avatar: string;
  name: string;
  country: string;
  job_role?: string;
};

export type Follower_List_Type = {
  follower_list: Follower_type[];
};
