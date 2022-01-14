import {ImageProps} from 'react-native';
export interface User {
  id?: number;
  userName: string;
  fullName: string;
  mobileNoOrEmail: string;
  password: string;
}
export interface PostDataType {
  name: string;
  id: number;
  likes: number;
  description: string;
  images: string[];
  comments: CommentDataType[];
}
export interface CommentDataType {
  likes: number;
  comment: string;
  name: string;
}

export interface ReelsDataType {
  name: string;
  index: number;
  likes: number;
  description: string;
  video: string;
  commentsCount: number;
}

export interface StoryDataType {
  name: string;
  id: number;
}

export interface NavigationListProps {
  name: string;
  component: React.ReactNode | undefined;
  iconUrl: ImageProps['source'];
}

export interface IconTypeProps {
  name?: string;
  url: ImageProps['source'];
  style?: object;
}
