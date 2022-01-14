import {PostDataType, User} from '../models';
const addUser = (users: User[], newUser: User) =>
  [...users, {id: users.length + 1, ...newUser}] as User[];
interface LoginProps {
  mobileNoOrEmail: string;
  password: string;
}
const authUser = (users: User[], user: LoginProps) =>
  users.some(
    (data: User) =>
      (data.mobileNoOrEmail = user.mobileNoOrEmail) &&
      data.password === user.password,
  );
const likePost = (likedPosts: number[], postId: null | number) => {
  return [...likedPosts, postId] as number[];
};

const unLikePost = (likedPosts: number[], postId: number | null) => {
  return likedPosts.filter(id => id !== postId);
};

const addComment = (
  posts: PostDataType[],
  postId: number | null,
  comment: any,
) => {
  //@ts-ignore
  const selectedPost = posts.find(data => data.id === postId) as PostDataType;
  selectedPost.comments = [...selectedPost.comments, comment];
  posts[postId as number] = selectedPost;
  return [selectedPost, posts];
};
export {addUser, authUser, likePost, unLikePost, addComment};
