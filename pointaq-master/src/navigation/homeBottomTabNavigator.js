import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Camera from '../screens/Camera';
import SearchScreen from '../screens/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import plusIcon from '../assets/images/plus-icon.png';
import avatar from '../assets/images/avatar.jpg';
import colors from '../assets/colors';
import NotificationsScreen from '../screens/Notifications';
import AccountScreen from '../screens/Account';
import generalStyles from '../assets/generalstyles';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: colors.PRIMARY,
          paddingTop:9,
        },
        style: {  
          borderTopWidth: 0,
          elevation: 0 
        },
        activeTintColor: colors.ALTERNATE,
        borderWidth:0
      }}
      initialRouteName="Home"
      >

      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'home'} size={25} color={color} />
          ),
          headerShown:false,
          tabBarLabel:''
        }}
      />
      <Tab.Screen
        name={'Notifications'}
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'bell'} size={25} color={color} />
          ),
          headerShown:false,
          tabBarLabel:''
        }}
      />
      <Tab.Screen
        name={'Create'}
        component={Camera}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={plusIcon}
              style={{height: 32, resizeMode: 'contain'}}
            />
          ),
          headerShown:false,
          tabBarLabel:''
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'search'}
              size={25}
              color={color}
            />
          ),
          headerShown:false,
          tabBarLabel:''
        }}
      />
      <Tab.Screen
        name={'Account'}
        component={AccountScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
             source={avatar}
             resizeMode={'cover'}
             style={generalStyles.roundedAvatar}
            />

          ),
          headerShown:false,
          tabBarLabel:''
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;