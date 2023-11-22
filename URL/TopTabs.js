import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../screens/Home';
import CacBanBep from '../screens/CacBanBep';

const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const TopTabs = () => {
  return (
    <TopTab.Navigator
        tabBarOptions={{
            style: {
            paddingTop: 30, // Điều chỉnh giá trị marginTop ở đây
            },
        }}
    >
      <TopTab.Screen name="Kho Cảm Hứng" component={Home} />
      <TopTab.Screen name="Các Bạn Bếp" component={CacBanBep} />
    </TopTab.Navigator>
  );
}
export default TopTabs