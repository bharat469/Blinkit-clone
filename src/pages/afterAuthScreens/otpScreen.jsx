import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthBackground from '../../helpers/background/authBackground';
import OtpInputComponent from '../../components/otpCompnent';
import { useDispatch } from 'react-redux';
import { saveUserToken } from '../../helpers/redux/slice.js/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_SAVE_NAME } from '../../helpers/constant/asyncSaveName';

const {height, width} = Dimensions.get('window');

const OtpScreen = () => {
 let otp='1234'
 let token='YOUHAVESUCCESFUULKYAUTHENTICATED'

 const dispatch =useDispatch()

 const _handleSubmit=async(Eotp)=>{
    if(Eotp===otp){
        dispatch(saveUserToken(token))
        console.log('hit')
     await   AsyncStorage.setItem(ASYNC_SAVE_NAME.USER_TOKEN,token).then(()=>'SUCCESSFULLY SAVE').catch(e=>console.log(e,'error in saving'))
    }
    else{
        Alert.alert('Soory You Entered Wrong OTP')
    }
 }

  return (
    <AuthBackground isLeftIcon={true}>
      <View style={styles.otpContainer}>
        <OtpInputComponent
        containerStyle={styles.containerView}
        onSubmit={_handleSubmit}
        
        />
      </View>
    </AuthBackground>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  otpContainer: {height: height / 1.8},
  containerView:{
    marginVertical:22
  }
});
