import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {AddIcon, HamburgerIcon} from '../../constants/icons';
import Icon from '../Icon';
const {width} = Dimensions.get('window');

const ProfileHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: width,
        marginVertical: 8,
      }}>
      <Text style={[styles.boldText, {fontSize: 18, marginHorizontal: 8}]}>
        will_smith
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>
        <Icon url={AddIcon} style={{marginHorizontal: 8}} />
        <Icon url={HamburgerIcon} style={{marginHorizontal: 8}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 16,
  },
  buttonStyle: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    margin: 6,
    padding: 4,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
});
export default ProfileHeader;
