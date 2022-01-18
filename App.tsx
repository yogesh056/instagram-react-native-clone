import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './src/screens/Landing';
import CommentsLayout from './src/components/CommentsLayout';
import Login from './src/screens/AuthenticationScreens/Login';
import Register from './src/screens/AuthenticationScreens/Register';

export const Stack = createNativeStackNavigator();

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
