import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface StatsProps {
  value: number;
  name: string;
}
const NumericStats: React.FC<StatsProps> = ({value, name}) => (
  <View style={{alignItems: 'center'}}>
    <Text style={styles.boldText}>{value}</Text>
    <Text>{name}</Text>
  </View>
);
const ProfileStats = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        margin: 6,
      }}>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://randomuser.me/api/portraits/med/men/99.jpg',
        }}
      />
      <NumericStats name={'Posts'} value={56} />
      <NumericStats name={'Following'} value={4713} />
      <NumericStats name={'Followers'} value={3092} />
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
});
export default ProfileStats;
