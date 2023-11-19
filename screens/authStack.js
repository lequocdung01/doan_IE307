import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Storages from './Storages';
import AddDishes from './AddDishes'


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
      <Stack.Navigator  
      initialRouteName="Storages"
      >
        <Stack.Screen 
          name="Storages"
          component={Storages}
          options={{ header: () => null }} 
        />
        <Stack.Screen 
          name="AddDishes"
          component={AddDishes}
          options={{ header: () => null }} 
        />
      </Stack.Navigator>
  )
}

export default AuthStack