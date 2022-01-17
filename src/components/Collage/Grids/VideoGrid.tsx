import React from 'react';
import VideoView from '../VideoView';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import {FlatList, SafeAreaView} from 'react-native';
interface VideoGridProps {
  images: number[];
}
const VideoGrid: React.FC<VideoGridProps> = ({images}) => {
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
        renderItem={({item, index}) => <VideoView />}
      />
    </SafeAreaView>
  );
};

export default VideoGrid;
