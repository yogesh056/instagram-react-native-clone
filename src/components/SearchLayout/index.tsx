import {observer} from 'mobx-react';
import React, {Fragment} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';

import {useTextInput} from '../FormHook';
import {LogBox} from 'react-native';
import ImageGrid from '../CollageLayout/Grids/ImageGrid';
import HybridGrid from '../CollageLayout/Grids/HybridGrid';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const SearchLayout = () => {
  const [searchValue, setSearchValue, searchInput] = useTextInput(
    '',
    '',
    'Search',
    true,
    '',
  );
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const renderGrids = (imageArr: number[]) => {
    return (
      <Fragment>
        <ImageGrid images={imageArr.slice(0, 3)} />
        <HybridGrid images={imageArr.slice(3, 7)} />
        <ImageGrid images={imageArr.slice(7, 10)} />
      </Fragment>
    );
  };
  return (
    <View>
      <ScrollView>
        {searchInput}
        <View>
          {renderGrids(arr.slice(0, 10))}
          {renderGrids(arr.slice(10, 20))}
          {renderGrids(arr.slice(20, 30))}
        </View>
      </ScrollView>
    </View>
  );
};

export default observer(SearchLayout);
