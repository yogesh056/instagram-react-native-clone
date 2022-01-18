import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {PostDataType} from '../../models';
import {
  LikeIcon,
  CommentIcon,
  ShareIcon,
  OptionIcon,
  SaveIcon,
  LikedIcon,
} from '../../constants/icons';
import Icon from '../Icon';
import PostImage from './PostImage';
import {useNavigation} from '@react-navigation/native';
import post from '../../store/post';
import {observer} from 'mobx-react';

const windowWidth = Dimensions.get('window').width;
const Post: React.FC<PostDataType> = ({
  name,
  images,
  likes,
  id,
  comments,
  description,
}) => {
  const navigation = useNavigation();

  //header
  const renderPostHeader = () => {
    return (
      <View style={[styles.header, styles.flexRowCenterSpaceBetween]}>
        <View style={styles.flexRowCenterSpaceBetween}>
          <Image
            style={styles.profileImage}
            source={{
              uri: `https://randomuser.me/api/portraits/med/men/${id + 10}.jpg`,
            }}
          />
          <Text style={[styles.boldFont, styles.lowercase]}>{name}</Text>
        </View>
        <Image style={styles.icon} source={OptionIcon} />
      </View>
    );
  };

  //Footer components

  //liked Person Collage
  const LikesImageCollage = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          style={[styles.imageCollage]}
          source={{
            uri: 'https://randomuser.me/api/portraits/med/men/87.jpg',
          }}
        />
        <Image
          style={[styles.imageCollage, styles.image2]}
          source={{
            uri: 'https://randomuser.me/api/portraits/med/men/77.jpg',
          }}
        />
        <Image
          style={[styles.imageCollage, styles.image3]}
          source={{
            uri: 'https://randomuser.me/api/portraits/med/men/89.jpg',
          }}
        />
      </View>
    );
  };

  // likes
  const renderLikes = () => {
    if (likes > 30)
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <LikesImageCollage />
          <Text style={[styles.verticalMargin]}>
            {'Liked by '}
            <Text style={[styles.boldFont, styles.lowercase]}>Will</Text>
            {' and '}
            <Text style={[styles.boldFont]}>{likes - 1}</Text> others
          </Text>
        </View>
      );
    else return <Text style={[styles.boldFont]}>{likes} likes</Text>;
  };

  //like and description
  const renderPostLikesAndDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        {renderLikes()}
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.boldFont, styles.lowercase]}>{name}</Text>
          <Text style={{paddingHorizontal: 3}}>{description}</Text>
        </View>
      </View>
    );
  };
  const handlePostLike = () => {
    console.log('Likes', post.selectPost, post.likedPosts);
    post.selectedId = id;
    post.likedPosts.includes(id) ? post.unLike() : post.like();
  };

  const handlePostComment = () => {
    post.selectPost(id);
    //@ts-ignore
    navigation.navigate('Comments');
  };

  const renderFooterActions = () => {
    return (
      <View style={styles.footerIconWrapper}>
        <View style={[styles.leftIcons, styles.flexRowCenterSpaceBetween]}>
          <TouchableOpacity onPress={() => handlePostLike()}>
            <Icon
              style={styles.icon}
              url={post.likedPosts.includes(id) ? LikedIcon : LikeIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePostComment()}>
            <Icon style={styles.icon} url={CommentIcon} />
          </TouchableOpacity>
          <Icon style={styles.icon} url={ShareIcon} />
        </View>
        <Icon style={styles.icon} url={SaveIcon} />
      </View>
    );
  };

  const renderCommentSection = () => {
    if (comments.length > 1) {
      return (
        <View style={[{flexDirection: 'row'}, styles.verticalMargin]}>
          <TouchableOpacity onPress={() => handlePostComment()}>
            <Text
              style={[
                styles.boldFont,
                {color: '#8e8e8e', fontSize: 15},
              ]}>{`View all ${comments.length} comments`}</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (comments.length) {
      const [firstComment] = comments;
      return (
        <View style={[{flexDirection: 'row'}, styles.verticalMargin]}>
          <Text style={styles.boldFont}>{firstComment.name}</Text>
          <Text style={{paddingHorizontal: 3}}>{firstComment.comment}</Text>
        </View>
      );
    }
  };

  const renderPostFooter = () => {
    return (
      <View style={styles.footer}>
        {renderFooterActions()}
        {renderPostLikesAndDescription()}
        {renderCommentSection()}
      </View>
    );
  };

  const renderImages = () => {
    return (
      <View style={{height: 400}}>
        <FlatList
          data={images}
          keyExtractor={(_, index) => index.toString()}
          bounces={false}
          decelerationRate={0}
          renderToHardwareTextureAndroid
          snapToAlignment="start"
          scrollEventThrottle={16}
          renderItem={({item}) => {
            return <PostImage url={item} id={id} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderPostHeader()}
      {renderImages()}
      {renderPostFooter()}
    </View>
  );
};

export default observer(Post);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  verticalMargin: {
    marginVertical: 3,
  },
  boldFont: {
    fontWeight: '600',
  },
  descriptionContainer: {
    paddingTop: 3,
  },
  header: {
    backgroundColor: 'white',
    margin: 2,
  },
  footer: {
    padding: 10,
  },
  footerIconWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftIcons: {
    width: 90,
  },
  flexRowCenterSpaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    margin: 6,
  },
  icon: {
    height: 22,
    width: 22,
  },
  imageCollage: {
    height: 16,
    width: 16,
    borderRadius: 50,
  },
  image2: {
    height: 16,
    width: 16,
    borderRadius: 50,
    position: 'relative',
    left: -5,
    zIndex: -1,
  },
  image3: {
    height: 16,
    width: 16,
    borderRadius: 50,
    position: 'relative',
    left: -10,
    zIndex: -2,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    width: windowWidth,
  },
  lowercase: {
    textTransform: 'lowercase',
  },
});
