import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BeforeAuthNav from './beforeAuthNav'
import { useDispatch, useSelector } from 'react-redux'
import AfterAuthNav from './afterAuthNav'
import { saveUserToken } from '../redux/slice.js/authSlice'
import { ASYNC_SAVE_NAME } from '../constant/asyncSaveName'
import AsyncStorage from '@react-native-async-storage/async-storage'


const RootNavigation = () => {
const [token,setToken]=useState('')
const {userToken}= useSelector(state=>state.auth)
const dispatch=useDispatch()

const GetTokenUser = async () => {
    try {
      const storedToken = await AsyncStorage.getItem(ASYNC_SAVE_NAME.USER_TOKEN);
      console.log(storedToken);
      if (storedToken) {
       
        setToken(storedToken);
        dispatch(saveUserToken(storedToken));
      } else {
        console.log('User token not found.');
        setToken(null); // Explicitly set token to null if not found
      }
    } catch (error) {
      console.error('Error retrieving user token:', error);
    }
  };

  useEffect(() => {
    GetTokenUser();
  }, []);

  return (
   <NavigationContainer>
   {
    token||userToken?<AfterAuthNav/>: <BeforeAuthNav/>
   } 
   </NavigationContainer>
  )
}

export default RootNavigation