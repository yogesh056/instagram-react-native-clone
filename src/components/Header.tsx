import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {LogoIcon, AddIcon, MessengerIcon, LogoutIcon} from '../constants/icons';
import Icon from './Icon';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon style={styles.logoIcon} url={LogoIcon} />
      <View style={styles.alignSpaceBetween}>
        <Icon url={AddIcon} style={styles.iconMargin} />
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigation.navigate('Login');
          }}>
          <Icon url={LogoutIcon} style={styles.iconMargin} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  alignSpaceBetween: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconMargin: {
    marginHorizontal: 8,
  },
  logoIcon: {
    height: 40,
    width: 105,
    marginHorizontal: 6,
  },
});
