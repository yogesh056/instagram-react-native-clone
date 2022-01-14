import {action, makeAutoObservable, observable} from 'mobx';
import {PostData, UsersData} from '../constants/data';
import {CommentDataType, PostDataType, User} from '../models';
import {addUser, unLikePost, likePost, addComment} from './actions';

class Store {
  //users
  users: User[] = [...UsersData];
  newUser: User = {} as User;

  //post
  posts: PostDataType[] = [...PostData];
  post: PostDataType = {} as PostDataType;
  postId: null | number = null;
  likedPosts: number[] = [];
  likedPost: null | number = null;
  newComment: CommentDataType = {} as CommentDataType;
  constructor() {
    makeAutoObservable(this);
  }

  addUser() {
    this.users = addUser(this.users, this.newUser);
    this.newUser = {} as User;
  }

  //post
  addComment() {
    [this.post, this.posts] = addComment(
      this.posts,
      this.postId,
      this.newComment,
    ) as [PostDataType, PostDataType[]];
    this.newComment = {} as CommentDataType;
    this.post = {} as PostDataType;
  }
  likePost() {
    this.likedPosts = likePost(this.likedPosts, this.postId);
    this.postId = null;
  }
  unLikePost() {
    this.likedPosts = unLikePost(this.likedPosts, this.postId);
    this.postId = null;
  }
}

const store = new Store();
export default store;
