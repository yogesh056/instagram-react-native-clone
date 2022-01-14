import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {LikeIcon} from '../../constants/icons';
import {CommentDataType} from '../../models';
import store from '../../store';
import {addComment} from '../../store/userCred';
import {useTextInput} from '../FormHook';
import Icon from '../Icon';

const Comments: React.FC<CommentDataType> = ({name, likes, comment}) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://randomuser.me/api/portraits/med/men/99.jpg',
              }}
            />
            <Text style={{margin: 8, fontWeight: 'bold'}}>{name}</Text>
            <Text>{comment}</Text>
          </View>
          <Icon url={LikeIcon} style={{width: 10, height: 10}} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 6,
  },
});
export default Comments;
