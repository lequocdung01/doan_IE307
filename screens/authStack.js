// npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './Home';
import Search from './Search';
import Storages from './Storages';
import Profile from './Profile';

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Search') {
            iconName = 'search'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Storages') {
            iconName = 'plus-circle'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Profile') {
            iconName = 'user'
            size = focused ? 28 : 28
            color = focused ? '#4190f4' : '#808080'
          }
          return (
            
            <Icon
              name={iconName}
              color={color}
              size={size}
            />
          )
        },
        tabBarLabelStyle: { fontSize: 12},
        // tabBarLabelStyle: { fontSize: 15,opacity: 0 },
      })
      }
    >
      <Tab.Screen name="Home" component={Home} options={{ header: () => null }} />
      <Tab.Screen name="Search" component={Search} options={{ header: () => null }} />
      <Tab.Screen name="Storages" component={Storages} options={{ header: () => null }} />
      <Tab.Screen name="Profile" component={Profile} options={{ header: () => null }} />
    </Tab.Navigator>
  );
}
export default Main