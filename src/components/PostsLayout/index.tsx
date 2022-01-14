import React from 'react';
import {View, FlatList, Text, Dimensions} from 'react-native';
import Post from './Post';
import {observer} from 'mobx-react';
import post from '../../store/post';
import {PostDataType} from '../../models';

const PostsLayout = () => {
  const limit = 5;
  const [activeData, setActiveData] = React.useState([] as PostDataType[]);
  const [scrollIndex, setScrollIndex] = React.useState(1);

  React.useEffect(() => {
    setActiveData(post.posts.slice(0, 5));
  }, []);
  const fetchNextItems = () => {
    if (scrollIndex <= 4) {
      setActiveData(post.posts.slice(scrollIndex, limit * scrollIndex));
      console.log('limits', scrollIndex, limit * scrollIndex);
      setScrollIndex(scrollIndex + 1);
    }
  };
  const renderFooter = () => {
    if (scrollIndex <= 4 && scrollIndex >= 1) return <Text>Loading</Text>;
  };
  return (
    <View style={{flex: 1, height: Dimensions.get('window').height * 0.86}}>
      <FlatList
        data={activeData}
        keyExtractor={item => {
          return item.id.toString();
        }}
        renderItem={data => {
          const {item, index} = data;
          return <Post {...item} />;
        }}
        initialNumToRender={2}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchNextItems()}
        ListFooterComponent={renderFooter()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default observer(PostsLayout);
