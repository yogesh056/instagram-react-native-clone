import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {AddUser} from '../../constants/icons';
import Icon from '../Icon';
import ProfileBio from './ProfileBio';
import ProfileStats from './ProfileStats';
const {width} = Dimensions.get('window');

const ProfileDetails = () => {
  const renderEditProfile = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          width: width,
          marginVertical: 5,
        }}>
        <TouchableOpacity style={{flex: 1, marginHorizontal: 6}}>
          <Text style={[styles.buttonStyle, {flex: 1, width: '100%'}]}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonStyle}>
          <Icon url={AddUser} style={{width: 18, height: 18}} />
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <ProfileStats />
      <ProfileBio />
      {renderEditProfile()}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    textAlign: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1.5,
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    margin: 6,
    padding: 4,
  },
});
export default ProfileDetails;
