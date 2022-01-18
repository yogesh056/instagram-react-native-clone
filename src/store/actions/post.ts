import {PostDataType} from '../../models';

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
  console.log('posts b4', postId, commentId, selectedPost.comments);

  selectedPost.comments = selectedPost.comments.filter(
    data => data.id !== commentId,
  );
  console.log('posts af', postId, commentId, selectedPost.comments);

  return [
    updatePosts(posts, selectedPost, postId) as PostDataType[],
    selectedPost as PostDataType,
  ];
};
export {
  likePost,
  unLikePost,
  addComment,
  deleteComment,
  getPostById,
  updatePosts,
};
