import {SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constant/colors';
import Cross from '../../assets/svg/cross.svg'
import ProfileIcon from '../../assets/svg/profileIcon.svg'
import { FONT_FAMILY, FONT_SIZE } from '../constant/fontSize';
import { useNavigation } from '@react-navigation/native';

const ListingBackground = props => {
  const {children} = props;
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.listingBackgroundStyle}>
      <StatusBar
          barStyle='light-content'
        //   translucent={true}
          backgroundColor="transparent"
        />
      <View style={styles.headerStyle}>
        <View style={styles.leftSection}>
          <Text style={styles.headerText}>Delivery in</Text>
          <View style={styles.innerContainer}>
          <Text style={styles.headerSubHeading}>8 Minute  </Text>
          <TouchableWithoutFeedback onPress={()=>navigation.goBack()} >
          <Cross width={26} height={26} />
          </TouchableWithoutFeedback>

          </View>
        </View>
        <ProfileIcon width={50} height={50}/>
      </View>
      <View style={styles.childrenStyle}>{children}</View>
    </SafeAreaView>
  );
};

export default ListingBackground;

const styles = StyleSheet.create({
  listingBackgroundStyle: {
    flex: 1,
    backgroundColor: COLORS.shadesOfPrimaryColor.shade1,
  },
  headerStyle:{
    flexDirection:'row',
    alignItems:'flex-start',
    marginVertical:22,
    justifyContent:'space-between',
    marginHorizontal:26
  },
 innerContainer:{
    flexDirection:'row',
    alignItems:'flex-start'
 },
 headerText:{
    fontSize:FONT_SIZE.h18,
    fontFamily:FONT_FAMILY.MontserratSemiBold,
    color:COLORS.listingTextColor,
    marginBottom:16,
    letterSpacing:0.6,
 },
 headerSubHeading:{
    fontSize:FONT_SIZE.h25,
    fontFamily:FONT_FAMILY.MontserratBold,
    color:COLORS.listingTextColor,
    letterSpacing:0.6,
    lineHeight:30
 },
 childrenStyle:{
     flex:1,
    backgroundColor:COLORS.lightColorWhite,
    borderTopLeftRadius:35,
    borderTopRightRadius:35
 }
});
