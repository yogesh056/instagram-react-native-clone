import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Likes = () => {
  return (
    <View style={{padding: 10, backgroundColor: 'white', flex: 1}}>
      <View style={{marginVertical: 8}}>
        <Text style={styles.headerText}>Activity</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginVertical: 5,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Image
            style={styles.image}
            source={{
              uri: `https://randomuser.me/api/portraits/med/men/${1}.jpg`,
            }}
          />
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <Text
              style={{fontSize: 14, marginHorizontal: 2, fontWeight: '600'}}>
              {'michael'}
            </Text>
            <Text style={{fontSize: 14, marginHorizontal: 2}}>
              {'liked your post. '}
            </Text>
            <Text style={[{fontSize: 13, marginHorizontal: 2, color: 'grey'}]}>
              {'1w'}
            </Text>
          </View>
        </View>

        <Image
          style={styles.postImage}
          source={{
            uri: `https://picsum.photos/400/400?random=1`,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  postImage: {
    height: 40,
    width: 40,
  },
});

export default Likes;
