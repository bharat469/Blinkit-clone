import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../helpers/constant/colors';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/fontSize';

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

  return <View>{_handleInputComponet()}</View>;
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
});
