import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DownArrow from '../assets/svg/arrowDown.svg';
import ProfileIcon from '../assets/svg/profileIcon.svg';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/fontSize';
import {COLORS} from '../helpers/constant/colors';

const Header = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.sectionLeft}>
        <Text style={styles.headerTextOne}>Delivery In</Text>
        <Text style={styles.headerTextTwo}>8 Minute</Text>
        <View style={styles.addressView}>
          <Text style={styles.addressText}>
            Home - <Text style={styles.addressTwo}>Sushrut G,Star Homes</Text>
          </Text>
          <DownArrow />
        </View>
      </View>
      <View>
        <ProfileIcon />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 26,
    alignItems: 'flex-start',
    marginVertical: 18,
  },
  headerTextOne: {
    fontSize: FONT_SIZE.h20,
    color: COLORS.secondaryColor,
    fontFamily: FONT_FAMILY.MontserratBold,
    marginBottom: 6,
  },
  headerTextTwo: {
    fontSize: FONT_SIZE.h26,
    color: COLORS.secondaryColor,
    fontFamily: FONT_FAMILY.MontserratExtraBold,
    marginHorizontal: 6,
  },
  addressView:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:6
  },
  addressText:{
    fontSize:FONT_SIZE.h15,
    fontFamily:FONT_FAMILY.MontserratBold,
    color:COLORS.secondaryColor
  },
  addressTwo:{
    fontFamily:FONT_FAMILY.MontserratSemiBold
  }

});
