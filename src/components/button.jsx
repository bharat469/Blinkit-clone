import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../helpers/constant/colors'
import { FONT_FAMILY, FONT_SIZE } from '../helpers/constant/fontSize'

const Button = (props) => {
    const{btnTitle='',dynamicBtnStyle={},onPress=()=>{}}=props
  return (
   <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
    <Text style={styles.btnText}>{btnTitle}</Text>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor:COLORS.primaryColor,
        marginBottom:42,
        alignItems:'center',
        marginHorizontal:26,
        padding:16,
        borderRadius:12
    },
    btnText:{
        color:COLORS.secondaryColor,
        fontFamily:FONT_FAMILY.MontserratBold,
        fontSize:FONT_SIZE.h16
    }

})