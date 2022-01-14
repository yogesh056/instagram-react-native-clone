import React from 'react';
import {View, FlatList} from 'react-native';
import Post from './Post';
import {observer} from 'mobx-react';
import store from '../../store';

const PostsLayout = () => {
  const PostObserver = observer(Post);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={store.posts}
        keyExtractor={item => {
          return item.id.toString();
        }}
        renderItem={data => {
          const {item, index} = data;
          return <PostObserver {...item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PostsLayout;
