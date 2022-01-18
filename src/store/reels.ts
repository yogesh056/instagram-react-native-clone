import {makeAutoObservable, autorun} from 'mobx';
import {ReelsData} from '../constants/data';
import {CommentDataType, ReelDataType} from '../models';
import {
  unLikeReel,
  likeReel,
  // addComment,
  getReelById,
  // deleteComment,
  //   deleteReelComment,
  //   addReelComment,
} from './actions/reels';

class Reel {
  selectedId: null | number = null;
  selected: ReelDataType = {} as ReelDataType;
  reels: ReelDataType[] = [...ReelsData];
  likedReels: number[] = [];
  newComment: CommentDataType = {} as CommentDataType;
  constructor() {
    makeAutoObservable(this);
  }
  //   addComment() {
  //     const [reels, selected] = addReelComment(
  //       this.reels,
  //       this.selectedId,
  //       this.newComment,
  //     );
  //     this.reels = reels;
  //     this.selected = selected;
  //     this.newComment = {} as CommentDataType;
  //   }
  //   deleteComment(id: number) {
  //     const [reels, selected] = deleteReelComment(
  //       this.reels,
  //       this.selectedId,
  //       id,
  //     );
  //     this.reels = reels;
  //     this.selected = selected;
  //   }

  selectReel(id: number) {
    this.selectedId = id;
    this.selected = getReelById(this.reels, id);
  }

  like() {
    const [reels, selected, likedReels] = likeReel(
      this.reels,
      this.likedReels,
      this.selectedId,
    );
    console.log('liked', this.likedReels, this.selectedId);
    this.reels = reels;
    this.selected = selected;
    this.likedReels = likedReels;
  }
  unLike() {
    const [reels, selected, likedReels] = unLikeReel(
      this.reels,
      this.likedReels,
      this.selectedId,
    );
    this.reels = reels;
    this.selected = selected;
    this.likedReels = likedReels;
  }
}
const reel = new Reel();
export default reel;
