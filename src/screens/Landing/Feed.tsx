import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Postslayout from '../../components/PostsLayout';
import StoriesLayout from '../../components/StoryLayout';

const Feed: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoriesLayout />
        <Postslayout />
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
