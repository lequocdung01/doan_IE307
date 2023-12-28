import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BaiViet from './BaiViet';
import LoSign from '../URL/LoSign';
import UpdateDishes from './UpdateDish';


const Stack = createNativeStackNavigator();
const BvURL = () => {
  return (
      <Stack.Navigator  
      initialRouteName="BaiViet"
      >
        <Stack.Screen 
          name="BaiViet"
          component={BaiViet}
        />
        <Stack.Screen 
          name="LoSign"
          component={LoSign}
          options={{ header: () => null }} 
        />
      </Stack.Navigator>
  )
}

export default BvURL