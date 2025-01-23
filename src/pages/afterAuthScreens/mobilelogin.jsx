import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AuthBackground from '../../helpers/background/authBackground';
import InputComponent from '../../components/inputComponent';
import {FONT_FAMILY, FONT_SIZE} from '../../helpers/constant/fontSize';
import {COLORS} from '../../helpers/constant/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/button';
import { ROUTE_NAME } from '../../helpers/constant/routeNames';


const Mobilelogin = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = phone => {
    const phoneRegex = /^[0-9]{10}$/; // Validates exactly 10 digits
    if (phoneRegex.test(phone)) {
      setError('');
    } else {
      setError('Invalid Phone Number !!!');
    }
    return phoneRegex.test(phone)
  };

  const _handleChangeText = text => {
    setPhoneNumber(text);
  };


  const _handleSumbmit=(phoneNumber)=>{
   if(validatePhoneNumber(phoneNumber)){
    props.navigation.navigate(ROUTE_NAME.otpScreen)
   }
   else{
    setError('Invalid Phone Number !!!');
   }
  }

  return (
    <AuthBackground>
      <KeyboardAwareScrollView enableOnAndroid={true} 
      keyboardShouldPersistTaps="handled" >
        <View style={styles.contentOfAuth}>
           
          <Image
            source={require('../../assets/farmer.png')}
            style={{width: 90, height: 90, marginVertical: 12}}
          />
          <Text style={styles.headerText}>India's last minute app</Text>
          <Text style={styles.descText}>Log in or sign up</Text>
        </View>
        <InputComponent
          value={phoneNumber}
          onChangeText={_handleChangeText}
          placeholder="Enter your mobile number"
          onEndEditing={() => validatePhoneNumber(phoneNumber)}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Button btnTitle="Continue" onPress={()=>_handleSumbmit(phoneNumber)}/>
      </KeyboardAwareScrollView>
      <View style={styles.termsScreen}>
        <Text style={styles.termsText}>
          By Continuing you aggree to our Terms of Service & Private Policy 💙{' '}
        </Text>
      </View>
    </AuthBackground>
  );
};

export default Mobilelogin;

const styles = StyleSheet.create({
  contentOfAuth: {
    alignItems: 'center',
    marginVertical: 12,
  },
  headerText: {
    fontSize: FONT_SIZE.h22,
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLORS.secondaryColor,
    letterSpacing: 0.5,
  },
  descText: {
    marginVertical: 6,
    fontSize: FONT_SIZE.h16,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    color: COLORS.secondaryColor,
  },
  termsScreen: {
    marginVertical: 22,
    marginHorizontal: 26,
    alignItems: 'center',
  },
  termsText: {
    textAlign: 'center',
    color: COLORS.secondaryColor,
    fontSize: FONT_SIZE.h12,
  },
  errorText: {
    color: COLORS.errorColor,
    fontSize: FONT_SIZE.h14,
    marginBottom: 12,
    textAlign: 'center',
  },
});
