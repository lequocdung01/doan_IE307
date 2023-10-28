import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Storages from './Storages';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const  Main=()=> {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} options={{header: () => null}}/>
    <Tab.Screen name="Search" component={Search} options={{header: () => null}}/>
    <Tab.Screen name="Storages" component={Storages} options={{header: () => null}}/>
    <Tab.Screen name="Profile" component={Profile} options={{header: () => null}}/>
    </Tab.Navigator>
  );
}

export default Main