import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {ReelsData} from '../../constants/data';
import {CameraIcon} from '../../constants/icons';
import Icon from '../Icon';
import Reel from './Reel';

const ReelsLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleReelsChange = ({index}: any) => {
    setCurrentIndex(index);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SwiperFlatList
        vertical={true}
        data={ReelsData}
        onChangeIndex={handleReelsChange}
        renderItem={({item}) => (
          <Reel item={item} currentIndex={currentIndex} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{position: 'absolute', top: 30, left: 16}}>
        <Text style={styles.textStyle}>Reels</Text>
      </View>
      <View style={{position: 'absolute', top: 30, right: 16}}>
        <Icon url={CameraIcon} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ReelsLayout;
