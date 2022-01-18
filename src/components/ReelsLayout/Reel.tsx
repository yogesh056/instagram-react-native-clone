import {observer} from 'mobx-react';
import React, {useRef, useState} from 'react';
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
  LikedIcon,
  LikeWhiteIcon,
  OptionWhiteIcon,
  ShareWhiteIcon,
} from '../../constants/icons';
import {ReelDataType} from '../../models';
import reel from '../../store/reels';
import Icon from '../Icon';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
interface ReelProps {
  item: ReelDataType;
  currentIndex: number;
}

const Reel: React.FC<ReelProps> = ({item, currentIndex}) => {
  const {id, likes, commentsCount, name, description, video} = item;
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const onError = () => {};
  const onBuffer = () => {};

  const handleReelLike = () => {
    reel.selectedId = id;
    reel.likedReels.includes(id) ? reel.unLike() : reel.like();
  };

  const renderActions = () => {
    return (
      <View style={styles.reelIcons}>
        <View style={styles.flexColumn}>
          <TouchableOpacity onPress={() => handleReelLike()}>
            <Icon
              url={reel.likedReels.includes(id) ? LikedIcon : LikeWhiteIcon}
            />
          </TouchableOpacity>
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
    );
  };
  const renderReelsDetails = () => {
    return (
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.profileImage}
            source={{
              uri: `https://randomuser.me/api/portraits/med/men/${50 + id}.jpg`,
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
    );
  };

  const renderVideo = () => {
    return (
      <TouchableOpacity onPress={() => setIsMuted(!isMuted)}>
        <Video
          onBuffer={onBuffer}
          onError={onError}
          source={{
            uri: video,
          }}
          ref={videoRef}
          resizeMode="cover"
          repeat={true}
          muted={isMuted}
          // paused={id !== currentIndex}
          paused={true}
          style={styles.backgroundVideo}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, height: windowHeight - 129}}>
      {renderVideo()}
      {renderReelsDetails()}
      {renderActions()}
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

export default observer(Reel);
