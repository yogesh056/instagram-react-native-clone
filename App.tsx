import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const LogoIcon = require('./src/assets/Logo.png');
export const Stack = createNativeStackNavigator();

import Landing from './src/screens/Landing';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import CommentsLayout from './src/components/CommentsLayout';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Comments'} component={CommentsLayout} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  alignSpaceBetween: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 26,
    width: 26,
    marginHorizontal: 8,
  },
  logoIcon: {
    height: 35,
    width: 100,
  },
});
