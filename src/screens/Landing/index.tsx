import React from 'react';
import {SafeAreaView} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';

const Landing: React.FC<{}> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BottomNavigation />
    </SafeAreaView>
  );
};
export default Landing;
