import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const ProfileBio = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: width,
        margin: 10,
      }}>
      <Text style={styles.boldText}>Will Smith</Text>
      <Text>Hey you!</Text>
      <Text>34 | Developer</Text>
      <Text>Chicago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ProfileBio;
