import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigator from './homeBottomTabNavigator';
import CreatePost from '../screens/CreatePost';
import colors from '../assets/colors';
import WelcomeScreen from '../screens/Welcome';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}} >
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Root" component={HomeBottomTabNavigator} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Create Post',
            headerTitleStyle:{color:colors.WHITE},
            headerBackground:colors.PRIMARY
          }}
          name="Create"
          component={CreatePost}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;