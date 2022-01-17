import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import SearchLayout from '../../components/SearchLayout';

const {width, height} = Dimensions.get('window');
const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchLayout />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});
export default Search;
