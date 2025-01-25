import {SafeAreaView, StatusBar, StyleSheet, Keyboard, TouchableWithoutFeedback, View, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';
import {COLORS} from '../constant/colors';

const MainPageBackground = props => {
  const {children} = props;
  return (
    <LinearGradient
      colors={['rgba(231, 176, 15, 0.3)', 'rgba(234,205,119,1)']} // Gradient colors
      start={{x: 0.5, y: 1}} // Start point (0deg equivalent)
      end={{x: 0.5, y: 0}} // End point (0deg equivalent)
      style={{flex: 1}} // Full-screen gradient
    >
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.secondaryColor}
        />
        <ScrollView>

        <Header />
        <View style={{flex:1,backgroundColor:COLORS.lightBackground}}>{children}</View>
        </ScrollView>
      </SafeAreaView>

        </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default MainPageBackground;

const styles = StyleSheet.create({});
