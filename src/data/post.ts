import type { Post } from "../types/profile_type";

export const PostData: Post[] = [
  {
    userName: "Jaydon Frankie",
    postDate: "18 Sep 2025",
    postCaption:
      "The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.",
    comments: [
      {
        commentDate: "15 Sep 2025",
        commentUserName: "Lainey Davidson",
        commnetImage: "src/assets/images/avatar-2.webp",
        comment: "Praesent venenatis metus at",
      },
      {
        commentDate: "14 Sep 2025",
        commentUserName: "Cristopher Cardenas",
        commnetImage: "src/assets/images/avatar-4.webp",
        comment:
          "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.",
      },
    ],
  },
  {
    userName: "Jaydon Frankie",
    postDate: "17 Sep 2025",
    postCaption:
      "She eagerly opened the gift, her eyes sparkling with excitement.",
    comments: [
      {
        commentDate: "16 Sep 2025",
        commentUserName: "Cristopher Cardenas",
        commnetImage: "src/assets/images/avatar-3.webp",
        comment: "Praesent venenatis metus at",
      },
      {
        commentDate: "15 Sep 2025",
        commentUserName: "Melanie Noble",
        commnetImage: "src/assets/images/avatar-5.webp",
        comment:
          "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.",
      },
    ],
  },
  {
    userName: "Jaydon Frankie",
    postDate: "16 Sep 2025",
    postCaption:
      "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
  },
];
