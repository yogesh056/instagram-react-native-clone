import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import {DeleteIcon, LikeIcon} from '../../constants/icons';
import {CommentDataType} from '../../models';
import post from '../../store/post';
import Icon from '../Icon';

const Comments: React.FC<CommentDataType> = ({name, likes, comment, id}) => {
  let swipeActions = [
    {
      // text: 'Delete',
      component: (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon url={DeleteIcon} style={{width: 20, height: 20}} />
        </View>
      ),
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => post.deleteComment(Number(id)),
    },
  ];
  return (
    <Swipeout
      right={swipeActions}
      style={{margin: 2, backgroundColor: 'white', borderRadius: 2}}>
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
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: '40%',
          }}>
          <Text style={styles.textStyle}>{'2m'}</Text>
          <Text style={styles.textStyle}>{`${likes} ${
            likes > 1 ? 'likes' : 'like'
          }`}</Text>
          <Text style={styles.textStyle}>{'reply'}</Text>
        </View>
      </View>
    </Swipeout>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  textStyle: {
    marginHorizontal: 8,
    fontSize: 11,
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
