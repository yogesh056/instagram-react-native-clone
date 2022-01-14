import React from 'react';
import {View, FlatList} from 'react-native';
import Post from './Post';
import {observer} from 'mobx-react';
import post from '../../store/post';

const PostsLayout = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={post.posts}
        keyExtractor={item => {
          return item.id.toString();
        }}
        renderItem={data => {
          const {item, index} = data;
          return <Post {...item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default observer(PostsLayout);
