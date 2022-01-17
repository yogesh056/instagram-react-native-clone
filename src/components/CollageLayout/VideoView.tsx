import React, {useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import {ReelsFillIcon} from '../../constants/icons';
import Icon from '../Icon';
const {width, height} = Dimensions.get('window');
const VideoView = () => {
  const videoRef = useRef(null);
  const onError = () => {};
  const onBuffer = () => {};
  return (
    <View style={{width: width / 3, height: height / 3}}>
      <TouchableOpacity>
        <Video
          onBuffer={onBuffer}
          onError={onError}
          source={{
            uri: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
          }}
          ref={videoRef}
          resizeMode="cover"
          repeat
          muted
          paused={false}
          style={styles.backgroundVideo}
        />
        <View style={{position: 'absolute', zIndex: 2, bottom: 10, left: 10}}>
          <Icon url={ReelsFillIcon} style={{width: 25, height: 25}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    backgroundColor: 'black',
    position: 'relative',
    width: width / 3,
    height: height / 3,
  },
});
export default VideoView;
