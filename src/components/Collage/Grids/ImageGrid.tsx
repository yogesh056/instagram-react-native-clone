import React from 'react';
import ImageView from '../ImageView';
import {FlatList, SafeAreaView} from 'react-native';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
interface ImageGridProps {
  images: number[];
}
const ImageGrid: React.FC<ImageGridProps> = ({images}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <FlatList
        data={images}
        numColumns={3}
        renderItem={({item, index}) => <ImageView index={item} />}
      />
    </SafeAreaView>
  );
};

export default ImageGrid;
