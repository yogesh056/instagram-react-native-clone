import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconTypeProps} from '../models';

const Icon: React.FC<IconTypeProps> = ({name, url, style}) => {
  return (
    <View>
      <Image style={[styles.icon, style]} source={url} />
    </View>
  );
};

export default Icon;
const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
