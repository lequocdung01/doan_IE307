// npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Search from './Search';
import AuthStack from './authStack';
import TopTabs from '../URL/TopTabs';
import ProAuthStack from './profileURL';
import StackHome from '../URL/StackHome';
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
      }s
    >
      <Tab.Screen name="Home" component={StackHome} options={{ header: () => null }} />
      <Tab.Screen name="Search" component={Search} options={{ header: () => null }} />
      <Tab.Screen name="Storages" component={AuthStack} options={{ header: () => null }} />
      <Tab.Screen name="ProfileScreen" component={ProAuthStack} options={{ header: () => null }} />
    </Tab.Navigator>
  );
}
export default Main
//123