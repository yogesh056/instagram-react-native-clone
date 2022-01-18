import {ReelDataType} from '../../models';

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
  // addReelComment,
  // deleteReelComment,
  likeReel,
  unLikeReel,
  getReelById,
  updateReels,
};
