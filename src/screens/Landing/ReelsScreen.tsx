import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Icon from '../../components/Icon';
import {ReelsData} from '../../constants/data';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {
  CameraIcon,
  CommentWhiteIcon,
  LikeWhiteIcon,
  OptionWhiteIcon,
  ShareWhiteIcon,
} from '../../constants/icons';
import ReelsLayout from '../../components/ReelsLayout';

const ReelsScreen = () => {
  return <ReelsLayout />;
};
export default ReelsScreen;
