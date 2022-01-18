import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Image, ImageProps, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Stories from '../../../components/StoryLayout/Stories';
import {GridIcon, ReelsIcon, TaggedIcon} from '../../../constants/icons';
import {NavigationListProps} from '../../../models';
import ProfileHeader from '../../../components/ProfileLayout/ProfileHeader';
import ProfileDetails from '../../../components/ProfileLayout/ProfileDetails';
import ImageGrid from '../../../components/CollageLayout/Grids/ImageGrid';
import VideoGrid from '../../../components/CollageLayout/Grids/VideoGrid';
import Icon from '../../../components/Icon';

const Tab = createMaterialTopTabNavigator();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const PostGrid = () => {
  return (
    <ScrollView>
      <ImageGrid images={arr.slice(0, 3)} />
      <ImageGrid images={arr.slice(0, 3)} />
      <ImageGrid images={arr.slice(0, 3)} />
    </ScrollView>
  );
};
const ReelGrid = () => {
  return (
    <ScrollView>
      <VideoGrid images={arr.slice(0, 3)} />
      <VideoGrid images={arr.slice(0, 2)} />
    </ScrollView>
  );
};
const NavigationsData: NavigationListProps[] = [
  {
    name: 'Grid',
    iconUrl: GridIcon,
    component: PostGrid,
  },
  {
    name: 'Reels',
    iconUrl: ReelsIcon,
    component: ReelGrid,
  },
  {
    name: 'Tagged',
    iconUrl: TaggedIcon,
    component: PostGrid,
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

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <ProfileHeader />
        <ProfileDetails />
      </View>
      <View style={{margin: 6}}>
        <Stories />
      </View>

      <Tab.Navigator tabBarPosition="top" style={{height: 800}}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
});

export default Profile;
