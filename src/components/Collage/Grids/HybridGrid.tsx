import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import ImageView from '../ImageView';
import VideoView from '../VideoView';
const {width} = Dimensions.get('window');
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
interface HybridGridProps {
  images: number[];
}
const HybridGrid: React.FC<HybridGridProps> = ({images}) => {
  const render4x4Grid = () => {
    return (
      <View
        style={{
          width: width / 1.5,
          height: '100%',
          flex: 1,
          backgroundColor: 'white',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <FlatList
          data={images}
          numColumns={2}
          renderItem={({item, index}) => <ImageView index={item} />}
        />
      </View>
    );
  };

  const renderRandomComponent = () => {
    return Math.floor(Math.random() * 10) / 2
      ? [<VideoView />, render4x4Grid()]
      : [render4x4Grid(), <VideoView />];
  };

  return (
    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {renderRandomComponent()}
    </View>
  );
};

export default HybridGrid;
