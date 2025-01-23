import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAME } from '../../constant/routeNames';
import HomeScreen from '../../../pages/beforeAuthScreens/home';

const AfterAuthNav = () => {
    const afterAuthContainer=createNativeStackNavigator() 
  return (
  <afterAuthContainer.Navigator>
    <afterAuthContainer.Screen name={ROUTE_NAME.homeScreen} component={HomeScreen} />
  </afterAuthContainer.Navigator>
  )
}

export default AfterAuthNav