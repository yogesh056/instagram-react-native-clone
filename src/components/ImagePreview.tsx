import {observer} from 'mobx-react';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import post from '../store/post';
const {width, height} = Dimensions.get('window');

const ImagePreview = () => {
  console.log('Post Selected', post.selectedPost);
  if (post.selectedPost)
    return (
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(52,52,52,0.8)',
        }}>
        <StatusBar backgroundColor="#525252" barStyle="dark-content" />
        <View
          style={{
            borderColor: 'white',
            position: 'absolute',
            top: height / 5,
            left: width / 18,
            borderRadius: 15,
            elevation: 50,
            borderWidth: 5,
            width: '90%',
            height: '50%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 15,
              backgroundColor: 'white',
            }}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/med/men/50.jpg',
              }}
              style={{
                width: 30,
                height: 30,
                paddingHorizontal: 15,
                borderRadius: 100,
              }}
            />
            <View style={{paddingLeft: 8}}>
              <Text style={{fontSize: 12, fontWeight: '600'}}>matt_hardy</Text>
            </View>
          </View>
          <Image
            style={{width: '100%', height: '85%'}}
            source={{
              uri: `https://picsum.photos/400/400?random=${post.selectedPost}}`,
            }}
          />
        </View>
      </View>
    );
  console.log('Post end', post.selectedPost);

  return <></>;
};

export default observer(ImagePreview);
