import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_SAVE_NAME } from '../../helpers/constant/asyncSaveName';
import { useDispatch } from 'react-redux';
import { resetAll } from '../../helpers/redux/slice.js/authSlice';

const HomeScreen = () => {
    const dispatch=useDispatch()
    const _handleLogout = async () => {
        await AsyncStorage.removeItem(ASYNC_SAVE_NAME.USER_TOKEN);
        dispatch(resetAll());
      };
  return (
    <View style={{flex:1,justifyContent:'center'}}>
        <View>
      <Button
    btnTitle='Logout'
    onPress={_handleLogout}
      />

        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})