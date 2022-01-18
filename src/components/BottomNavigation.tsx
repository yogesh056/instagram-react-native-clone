import React from 'react';
import {SafeAreaView, Image, ImageProps, StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationListProps} from '../models';
import Icon from './Icon';
import {HomeIcon, LikeIcon, SearchIcon, ReelsIcon} from '../constants/icons';
import ImagePreview from './ImagePreview';
import Feed from '../screens/Landing/NavigationScreens/Feed';
import Search from '../screens/Landing/NavigationScreens/Search';
import ReelsScreen from '../screens/Landing/NavigationScreens/ReelsScreen';
import Activity from '../screens/Landing/NavigationScreens/Activity';
import Profile from '../screens/Landing/NavigationScreens/Profile';
import MessageModal from '../screens/Landing/Modals/MessageModal';
import {observer} from 'mobx-react';

const Tab = createMaterialTopTabNavigator();

const NavigationsData: NavigationListProps[] = [
  {
    name: 'Home',
    iconUrl: HomeIcon,
    component: Feed,
  },
  {
    name: 'Search',
    iconUrl: SearchIcon,
    component: Search,
  },
  {
    name: 'Reels',
    iconUrl: ReelsIcon,
    component: ReelsScreen,
  },
  {
    name: 'Like',
    iconUrl: LikeIcon,
    component: Activity,
  },
  {
    name: 'Profile',
    iconUrl: HomeIcon,
    component: Profile,
    iconType: 'image',
  },
];

const renderIcon = (iconUrl: ImageProps['source'], iconType: string) => {
  if (iconType)
    return (
      <Image
        style={styles.image}
        source={{
          uri: 'https://randomuser.me/api/portraits/med/men/99.jpg',
        }}
      />
    );
  return <Icon url={iconUrl} />;
};

const BottomNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator tabBarPosition="bottom" style={{flex: 1, height: 800}}>
        {NavigationsData.map(
          (
            {name, iconUrl, iconType, component}: NavigationListProps,
            index,
          ) => (
            <Tab.Screen
              key={index}
              name={name}
              options={{
                tabBarShowLabel: false,
                //@ts-ignore
                tabBarIcon: () => renderIcon(iconUrl, iconType),
              }}
              //@ts-ignore
              component={component}
            />
          ),
        )}
      </Tab.Navigator>
      <ImagePreview />
      <MessageModal />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
});
export default observer(BottomNavigation);
