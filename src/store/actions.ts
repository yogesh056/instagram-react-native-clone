import Reel from '../components/ReelsLayout/Reel';
import {PostDataType, ReelDataType, UserDataType} from '../models';
const addUser = (users: UserDataType[], newUser: UserDataType) =>
  [...users, {id: users.length + 1, ...newUser}] as UserDataType[];
interface LoginProps {
  mobileNoOrEmail: string;
  password: string;
}
const authUser = (users: UserDataType[], user: LoginProps) =>
  users.some(
    (data: UserDataType) =>
      (data.mobileNoOrEmail = user.mobileNoOrEmail) &&
      data.password === user.password,
  );
const likePost = (
  posts: PostDataType[],
  likedPosts: number[],
  postId: null | number,
): [PostDataType[], PostDataType, number[]] => {
  const selectedPost = getPostById(posts, postId);
  selectedPost.likes++;
  return [
    updatePosts(posts, selectedPost, postId) as PostDataType[],
    selectedPost as PostDataType,
    [...likedPosts, postId] as number[],
  ];
};

const unLikePost = (
  posts: PostDataType[],
  likedPosts: number[],
  postId: null | number,
): [PostDataType[], PostDataType, number[]] => {
  const selectedPost = getPostById(posts, postId);
  selectedPost.likes--;
  return [
    updatePosts(posts, selectedPost, postId) as PostDataType[],
    selectedPost as PostDataType,
    likedPosts.filter(id => id !== postId) as number[],
  ];
};

const getPostById = (posts: PostDataType[], postId: number | null) => {
  return posts.find(data => data.id === postId) as PostDataType;
};

const updatePosts = (
  posts: PostDataType[],
  post: PostDataType,
  postId: null | number,
) => {
  const tempPosts = [...posts];
  tempPosts[postId as number] = post;
  return tempPosts;
};

const addComment = (
  posts: PostDataType[],
  postId: number | null,
  comment: any,
): [PostDataType[], PostDataType] => {
  const selectedPost = getPostById(posts, postId);
  selectedPost.comments = [
    ...selectedPost.comments,
    {...comment, id: selectedPost.comments.length},
  ];
  return [
    updatePosts(posts, selectedPost, postId) as PostDataType[],
    selectedPost as PostDataType,
  ];
};

const deleteComment = (
  posts: PostDataType[],
  postId: number | null,
  commentId: number,
): [PostDataType[], PostDataType] => {
  const selectedPost = getPostById(posts, postId);

  selectedPost.comments = selectedPost.comments.filter(
    data => data.id !== commentId,
  );
  return [
    updatePosts(posts, selectedPost, postId) as PostDataType[],
    selectedPost as PostDataType,
  ];
};

// const addReelComment = (
//   posts: ReelDataType[],
//   postId: number | null,
//   comment: any,
// ): [ReelDataType[], ReelDataType] => {
//   const selectedPost = getReelById(posts, postId);
//   selectedPost.comments = [
//     ...selectedPost.comments,
//     {...comment, id: selectedPost.comments.length},
//   ];
//   return [
//     updateReels(posts, selectedPost, postId) as ReelDataType[],
//     selectedPost as ReelDataType,
//   ];
// };

// const deleteReelComment = (
//   posts: ReelDataType[],
//   postId: number | null,
//   commentId: number,
// ): [ReelDataType[], ReelDataType] => {
//   const selectedPost = getReelById(posts, postId);

//   selectedPost.comments = selectedPost.comments.filter(
//     data => data.id !== commentId,
//   );
//   return [
//     updateReels(posts, selectedPost, postId) as ReelDataType[],
//     selectedPost as ReelDataType,
//   ];
// };

const likeReel = (
  reels: ReelDataType[],
  likedReels: number[],
  reelId: null | number,
): [ReelDataType[], ReelDataType, number[]] => {
  const selectedReel = getReelById(reels, reelId);
  selectedReel.likes++;
  console.log('like done', selectedReel, reelId);
  return [
    updateReels(reels, selectedReel, reelId) as ReelDataType[],
    selectedReel as ReelDataType,
    [...likedReels, reelId] as number[],
  ];
};

const unLikeReel = (
  reels: ReelDataType[],
  likedReels: number[],
  reelId: null | number,
): [ReelDataType[], ReelDataType, number[]] => {
  const selectedReel = getReelById(reels, reelId);
  selectedReel.likes--;
  return [
    updateReels(reels, selectedReel, reelId) as ReelDataType[],
    selectedReel as ReelDataType,
    likedReels.filter(id => id !== reelId) as number[],
  ];
};

const getReelById = (reels: ReelDataType[], reelId: number | null) => {
  return reels.find(data => data.id === reelId) as ReelDataType;
};

const updateReels = (
  reels: ReelDataType[],
  reel: ReelDataType,
  reelId: null | number,
) => {
  const tempReels = [...reels];
  tempReels[reelId as number] = reel;
  return tempReels;
};
export {
  addUser,
  // addReelComment,
  // deleteReelComment,
  authUser,
  likePost,
  unLikePost,
  likeReel,
  unLikeReel,
  addComment,
  deleteComment,
  getPostById,
  updatePosts,
  getReelById,
  updateReels,
};
