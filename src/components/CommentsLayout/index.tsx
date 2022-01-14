import React, {useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {CommentDataType} from '../../models';
import store from '../../store';
import {useTextInput} from '../FormHook';
import Comments from './Comments';

import {observer} from 'mobx-react';
const CommentObserver = observer(Comments);
const CommentsLayout = () => {
  const [newComment, setNewComment, commentInput] = useTextInput(
    '',
    '',
    'Add new comment...',
    true,
    '',
    {borderRadius: 30},
  );

  const handleComment = () => {
    store.newComment = {comment: newComment, likes: 0, name: 'Mark'};
    store.addComment();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={store.post.comments}
        renderItem={({item}: any) => {
          return <CommentObserver {...item} />;
        }}
      />
      <View style={styles.comment}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://randomuser.me/api/portraits/med/men/99.jpg',
          }}
        />
        <View
          style={{
            width: '70%',
          }}>
          {commentInput}
        </View>
        <TouchableOpacity onPress={() => handleComment()}>
          <Text style={styles.buttonStyle}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  buttonStyle: {
    color: '#0095f6',
    margin: 5,
  },
  comment: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 6,
  },
});
export default CommentsLayout;
