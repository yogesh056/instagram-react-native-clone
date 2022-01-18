import React from 'react';
import {FlatList} from 'react-native';
import {StoryData} from '../../constants/data';
import Story from './Story';

const Stories: React.FC<{}> = () => {
  return (
    <FlatList
      data={StoryData}
      keyExtractor={item => {
        return item.name;
      }}
      renderItem={data => {
        const {
          item: {id, name},
          index,
        } = data;
        return (
          <Story
            seen={false}
            imageUri={`https://randomuser.me/api/portraits/med/men/${id}.jpg`}
            name={name}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Stories;
