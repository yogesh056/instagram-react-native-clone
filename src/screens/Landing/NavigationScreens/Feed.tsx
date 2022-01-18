import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Postslayout from '../../../components/PostsLayout';
import StoryLayout from '../../../components/StoryLayout';
import {LogBox} from 'react-native';
import Header from '../../../components/Header';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const Feed: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryLayout />
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
