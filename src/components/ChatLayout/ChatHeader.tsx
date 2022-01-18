import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {BackIcon, VideoIcon, WriteIcon} from '../../constants/icons';
import appStore from '../../store';
import Icon from '../Icon';
const {width} = Dimensions.get('window');

const ChatHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: width,
        marginVertical: 10,
        marginHorizontal: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => appStore.toggleMessageModal(false)}>
          <Icon
            url={BackIcon}
            style={{marginHorizontal: 8, width: 20, height: 20}}
          />
        </TouchableOpacity>

        <Text style={[styles.boldText, {fontSize: 18, marginHorizontal: 8}]}>
          will_smith
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Icon url={VideoIcon} style={{marginHorizontal: 8}} />
        <Icon url={WriteIcon} style={{marginHorizontal: 8}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ChatHeader;
