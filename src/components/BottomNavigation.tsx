import React from 'react';
import {SafeAreaView, Image, ImageProps, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '../screens/Landing/Feed';
import {NavigationListProps} from '../models';
import Search from '../screens/Landing/Search';
import ReelsScreen from '../screens/Landing/ReelsScreen';
import Activity from '../screens/Landing/Activity';
import Profile from '../screens/Landing/Profile';
import Icon from './Icon';
import {HomeIcon, LikeIcon, SearchIcon, ReelsIcon} from '../constants/icons';
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
export default BottomNavigation;
