import React, {memo, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {TapGestureHandler} from 'react-native-gesture-handler';

const AnimatedImage = Animated.createAnimatedComponent(Image);
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import post from '../../store/post';

const PostImage: React.FC<{url: string; id: number}> = ({url, id}) => {
  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const transformStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));
  const opacity = useSharedValue(1);

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
    handlePostLike();
  }, []);

  const handlePostLike = () => {
    post.selectedId = id;
    !post.likedPosts.includes(id) && post.like();
  };

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, undefined, isFinished => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(1));
      }
    });
  }, []);

  return (
    <TapGestureHandler
      waitFor={doubleTapRef}
      onActivated={onSingleTap}
      key={id}>
      <TapGestureHandler
        maxDelayMs={250}
        ref={doubleTapRef}
        numberOfTaps={2}
        onActivated={onDoubleTap}>
        <Animated.View>
          <ImageBackground
            style={[styles.image]}
            source={{
              uri: `${url}?random=${Math.floor(Math.random() * 100 + 1)}`,
            }}>
            <AnimatedImage
              source={require('../../assets/HeartFill.png')}
              style={[
                styles.icon,
                {
                  shadowOffset: {width: 0, height: 20},
                  shadowOpacity: 0.35,
                  shadowRadius: 35,
                },
                transformStyle,
              ]}
            />
          </ImageBackground>
        </Animated.View>
      </TapGestureHandler>
    </TapGestureHandler>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'stretch',
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  },
});
export default memo(PostImage);
