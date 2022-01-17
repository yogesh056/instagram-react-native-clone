import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useTextInput} from '../FormHook';
import Comments from './Comments';

import {observer} from 'mobx-react';
import post from '../../store/post';

const CommentsLayout: React.FC<{}> = ({}) => {
  const [newComment, setNewComment, commentInput] = useTextInput(
    '',
    '',
    'Add new comment...',
    true,
    '',
    {borderRadius: 30},
  );

  const handleComment = () => {
    post.newComment = {comment: newComment, likes: 0, name: 'Mark'};
    post.addComment();
  };

  const renderAddComment = () => {
    return (
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
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={post.selected.comments}
        renderItem={({item}: any) => {
          return <Comments {...item} />;
        }}
      />
      {renderAddComment()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  buttonStyle: {
    color: '#0095f6',
    margin: 5,
  },
  comment: {
    margin: 10,
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
export default observer(CommentsLayout);
