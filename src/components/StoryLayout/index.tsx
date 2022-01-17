import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from '../Icon';
import {PlusIcon} from '../../constants/icons';
import Stories from './Stories';
const StoryLayout = () => {
  const renderAddStory = () => {
    return (
      <View style={styles.addStoryContainer}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://randomuser.me/api/portraits/med/men/99.jpg',
            }}
          />
          <Icon style={styles.icon} url={PlusIcon} />
        </View>
        <Text style={styles.text}>Your Story</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderAddStory()}
      <Stories />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
  },
  addStoryContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 2,
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 6,
    borderColor: 'white',
  },
  icon: {
    height: 23,
    width: 23,
    borderRadius: 50,
    position: 'absolute',
    bottom: 5,
    right: 3,
    borderWidth: 3,
    borderColor: 'white',
  },
});

export default StoryLayout;
