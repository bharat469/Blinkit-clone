import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAME } from '../../constant/routeNames';
import Mobilelogin from '../../../pages/afterAuthScreens/mobilelogin';
import OtpScreen from '../../../pages/afterAuthScreens/otpScreen';

const BeforeAuthContainer= createNativeStackNavigator()

const BeforeAuthNav = () => {
  return (
   <BeforeAuthContainer.Navigator>
    <BeforeAuthContainer.Screen name={ROUTE_NAME.mobileLogin} component={Mobilelogin} options={{headerShown:false}} />
    <BeforeAuthContainer.Screen name={ROUTE_NAME.otpScreen} component={OtpScreen} options={{headerShown:false}} />
   </BeforeAuthContainer.Navigator>
  )
}

export default BeforeAuthNav