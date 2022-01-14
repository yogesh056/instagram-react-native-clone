import {makeAutoObservable, autorun} from 'mobx';
import {PostData} from '../constants/data';
import {CommentDataType, PostDataType} from '../models';
import {
  unLikePost,
  likePost,
  addComment,
  getPostById,
  deleteComment,
} from './actions';

class Post {
  //post
  selectedId: null | number = null;
  selected: PostDataType = {} as PostDataType;
  posts: PostDataType[] = [...PostData];
  likedPosts: number[] = [];
  newComment: CommentDataType = {} as CommentDataType;
  constructor() {
    makeAutoObservable(this);
  }
  //post
  addComment() {
    const [posts, selected] = addComment(
      this.posts,
      this.selectedId,
      this.newComment,
    );
    this.posts = posts;
    this.selected = selected;
    this.newComment = {} as CommentDataType;
  }
  deleteComment(id: number) {
    const [posts, selected] = deleteComment(this.posts, this.selectedId, id);
    this.posts = posts;
    this.selected = selected;
  }

  selectPost(id: number) {
    this.selectedId = id;
    this.selected = getPostById(this.posts, id);
  }

  like() {
    const [posts, selected, likedPosts] = likePost(
      this.posts,
      this.likedPosts,
      this.selectedId,
    );
    this.posts = posts;
    this.selected = selected;
    this.likedPosts = likedPosts;
  }
  unLike() {
    const [posts, selected, likedPosts] = unLikePost(
      this.posts,
      this.likedPosts,
      this.selectedId,
    );
    this.posts = posts;
    this.selected = selected;
    this.likedPosts = likedPosts;
  }
}
// autorun(() => {
//   if (post.selectedId) post.selected = getPostById(post.posts, post.selectedId);
// });
const post = new Post();
export default post;
