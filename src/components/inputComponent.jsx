import {Dimensions, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {COLORS} from '../helpers/constant/colors';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/fontSize';
import { MODE_NAME } from '../helpers/constant/mode';
import SearchIcon from '../assets/svg/searchIcon.svg'
import MicIcon from '../assets/svg/mic.svg'

const {Width, Height} = Dimensions.get('screen');

const InputComponent = props => {
  const {
    placeholder = '',
    value = '',
    onChangeText = () => {},
    secureTextEntry = false,
    style,
    mode = '',
    onEndEditing = () => {},
  } = props;

  const _handleInputComponet = () => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.textInputStyle}>+91</Text>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.secondaryColor}
          style={style ?? styles.inputTab}
          keyboardType="phone-pad"
          maxLength={15}
          onEndEditing={onEndEditing}
        />
      </View>
    );
  };

  const _handleSearchInputCompnent = () => {
    return (
      <View style={styles.searchContainer}>
        <SearchIcon/>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.secondaryColor}
          style={style ?? styles.inputTab}
          maxLength={15}
        />
        <View style={styles.underlineVertical}/>
        <TouchableWithoutFeedback>
          <MicIcon/>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return <View>{mode===MODE_NAME.SEARCH_INPUT_BTN? _handleSearchInputCompnent() :_handleInputComponet()}</View>;
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    marginHorizontal: 26,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
    borderRadius: 12,
    borderColor: COLORS.lightBorderWithOpacity,
  },
  textInputStyle: {
    fontSize: FONT_SIZE.h16,
    marginLeft: 12,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
  },

  inputTab: {
    flex: 1,
    padding: 16,
  },
  searchContainer:{
    flexDirection:'row',
    backgroundColor:COLORS.whiteColor,
    alignItems:"center",
    marginHorizontal:26,
    paddingHorizontal:12,
    borderRadius:12
  },
  underlineVertical:{
    width:1,
    height:30,
    backgroundColor:COLORS.greyColor
  },
  inputTab:{
    height:50,
    paddingHorizontal:12,
    // marginVertical:12,
    flex:1,
    fontSize:FONT_SIZE.h16
  }
});
