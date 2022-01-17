import React from 'react';
import {Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import post from '../../store/post';
const {width, height} = Dimensions.get('window');

const ImageView: React.FC<{index: number}> = ({index}) => {
  return (
    <TouchableOpacity
      onPressIn={() => {
        post.selectedPost = index;
        console.log('prss in', post.selectedPost, index);
      }}
      onPressOut={() => {
        post.selectedPost = null;
        console.log('prss out', post.selectedPost, index);
      }}>
      <Image
        style={{width: width / 3, height: height / 6}}
        source={{
          uri: `https://picsum.photos/400/400?random=${index}}`,
        }}
      />
    </TouchableOpacity>
  );
};

export default ImageView;
