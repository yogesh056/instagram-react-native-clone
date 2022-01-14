import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import {
  CameraIcon,
  CommentWhiteIcon,
  LikeWhiteIcon,
  OptionWhiteIcon,
  ShareWhiteIcon,
} from '../../constants/icons';
import {ReelsDataType} from '../../models';
import Icon from '../Icon';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface ReelProps {
  item: ReelsDataType;
  currentIndex: number;
}

const Reel: React.FC<ReelProps> = ({item, currentIndex}) => {
  const {index, likes, commentsCount, name, description, video} = item;
  const videoRef = useRef(null);
  const onError = () => {};
  const onBuffer = () => {};
  return (
    <View style={{flex: 1, height: windowHeight - 129}}>
      <Video
        onBuffer={onBuffer}
        onError={onError}
        source={{
          uri: video,
        }}
        ref={videoRef}
        resizeMode="cover"
        repeat={true}
        muted={true}
        // paused={index !== currentIndex}
        paused={true}
        style={styles.backgroundVideo}
      />
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.profileImage}
            source={{
              uri: `https://randomuser.me/api/portraits/med/men/${
                50 + index
              }.jpg`,
            }}
          />
          <Text style={[styles.textStyle, {fontSize: 14, marginHorizontal: 8}]}>
            {name}
          </Text>
          <TouchableOpacity>
            <Text style={styles.buttonStyle}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 2}}>
          <Text numberOfLines={1} style={{color: 'white', marginRight: 10}}>
            {description}
          </Text>
          <TouchableOpacity>
            <Text>more</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.reelIcons}>
        <View style={styles.flexColumn}>
          <Icon url={LikeWhiteIcon} />
          <Text style={[styles.textStyle, {fontSize: 12}]}>{likes}</Text>
          <Icon url={CommentWhiteIcon} />
          <Text style={[styles.textStyle, {fontSize: 12}]}>
            {commentsCount}
          </Text>
          <Icon url={ShareWhiteIcon} />
          <Icon url={OptionWhiteIcon} />
          <Icon url={CameraIcon} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 24,
    width: 300,
    paddingHorizontal: 16,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  flexColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reelIcons: {
    margin: 10,
    position: 'absolute',
    bottom: 20,
    right: 0,
    height: windowHeight / 4,
  },
  buttonStyle: {
    borderColor: 'white',
    borderWidth: 0.5,
    color: 'white',
    fontSize: 10,
    margin: 8,
    padding: 4,
  },
});

export default Reel;
