import React from 'react';
import {SafeAreaView, Image, ImageProps} from 'react-native';
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
  },
];

const renderIcon = (iconUrl: ImageProps['source']) => {
  return <Icon url={iconUrl} />;
};

const BottomNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator tabBarPosition="bottom" style={{flex: 1, height: 800}}>
        {NavigationsData.map(
          ({name, iconUrl, component}: NavigationListProps, index) => (
            <Tab.Screen
              key={index}
              name={name}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: () => renderIcon(iconUrl),
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
export default BottomNavigation;
