import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/login';
const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='' component={Login}/>
    

   </Stack.Navigator>
  )
}