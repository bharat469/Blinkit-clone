import {
  Dimensions,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constant/colors';
import LeftIcon from '../../assets/svg/arrowLeft.svg';
import { useNavigation } from '@react-navigation/native';

const {Height, Width} = Dimensions.get('window');
const AuthBackground = props => {
  const  navigation=useNavigation()
  const {
    image = require('../../assets/login.png'),
    children,
    SectionHeight = Height / 2.5,
    isLeftIcon=false
  } = props;

const _handleNavigation=()=>{
   navigation.goBack()
}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        />
        {
            isLeftIcon&&   <TouchableWithoutFeedback onPress={_handleNavigation}>
            <View style={styles.iconConatiner}>
              <LeftIcon />
            </View>
          </TouchableWithoutFeedback>
        }
     
        <View style={[styles.sectionStyle, {height: SectionHeight}]}>
          {children}
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default AuthBackground;

const styles = StyleSheet.create({
  sectionStyle: {
    backgroundColor: COLORS.whiteColor,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    width: Width,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    shadowColor: '#070707',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 6,
  },
  iconConatiner: {
    marginVertical: 62,
    marginHorizontal: 22,
    borderWidth: 1,
    width: 50,
    alignItems: 'center',
    padding: 12,
    borderRadius: 50,
    borderColor: COLORS.lightBorderWithOpacity,
    backgroundColor:COLORS.secondaryColor
  },
});
