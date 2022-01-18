import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CameraIcon2} from '../../constants/icons';
import Icon from '../Icon';
interface ChatOverviewProps {
  isActive: boolean;
  activeTime: string;
  name: string;
  index: number;
}
const ChatOverview: React.FC<ChatOverviewProps> = ({
  isActive,
  activeTime,
  index,
  name,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        margin: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 8,
        }}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `https://randomuser.me/api/portraits/med/men/${index}.jpg`,
            }}
          />
          {isActive && <View style={styles.active}></View>}
        </View>

        <View
          style={{
            marginHorizontal: 8,
          }}>
          <Text style={[styles.boldText, {fontSize: 16, marginHorizontal: 8}]}>
            {name}
          </Text>
          <Text style={[{fontSize: 14, marginHorizontal: 8}]}>
            Active {activeTime}
          </Text>
        </View>
      </View>
      <Icon url={CameraIcon2} style={{marginHorizontal: 8}} />
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    width: 12,
    height: 12,
    backgroundColor: '#4FC626',
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 4,
    borderRadius: 50,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  boldText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ChatOverview;
