import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../helpers/constant/colors';
import { FONT_FAMILY, FONT_SIZE } from '../helpers/constant/fontSize';
import StopWatch from '../assets/svg/stopwatch.svg'

const screenWidth = Dimensions.get('window').width;

const ProductCard = ({product}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / screenWidth);
    setCurrentImage(currentIndex);
  };

  return (
    <View style={styles.card}>
      <View style={styles.productDetails}>
        <Text
          style={styles.productName}
          numberOfLines={1} // Limits text to one line
          ellipsizeMode="tail" // Truncates with "..." if text overflows
        >
          {product.ProductName}
        </Text>
        <View style={styles.secondaryStyle}>
        <Text style={styles.productQuantity}>{product.ProductQuantity}</Text>
        <View style={styles.timeContainer}>
            <StopWatch width={20} height={20}/>
            <Text style={styles.timerText}>8 mins</Text>
        </View>
        </View>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.imageContainer}>
        {product.imagesArray.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.productImage}
            resizeMode="contain"
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {product.imagesArray.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentImage === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
      <View style={styles.footerView}>
        <Text style={styles.productPrice}>{product.ProductMrp}</Text>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: screenWidth / 2.4,
    // marginHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.greenBorderLine,
    backgroundColor:COLORS.whiteColor,
    borderRadius: 22,
    marginVertical: 12,
    shadowColor: COLORS.greenBorderLine,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    borderRadius:8
  },
  imageContainer: {
    width: '100%',
    height: 150,
  },
  productImage: {
    width: screenWidth / 2.5,
    height: 150,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
    // alignItems:'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: COLORS.secondaryColor,
  },
  productDetails: {
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: FONT_SIZE.h16,
    fontFamily:FONT_FAMILY.MontserratBold,
    color: COLORS.secondaryColor,
  },
  productQuantity: {
    fontSize: FONT_SIZE.h14,
    color: COLORS.secondaryColor,
    fontFamily:FONT_FAMILY.MontserratRegular,
    marginVertical: 4,
    marginLeft:18
  },
  productPrice: {
    fontSize: FONT_SIZE.h14,
    color: COLORS.secondaryColor,
    fontFamily: FONT_FAMILY.MontserratBold,
  },
  footerView: {
    alignItems: 'center',
  },
  footerBtn: {
    borderWidth: 2,
    padding: 6,
    marginVertical: 12,
    width: screenWidth / 5,
    alignItems: 'center',
    borderColor: COLORS.greenBorderLine,
    shadowColor: COLORS.greenBorderLine,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    borderRadius:8
  },
  footerText:{
    fontSize:FONT_SIZE.h16,
    color:COLORS.greenBorderLine,
    fontFamily:FONT_FAMILY.MontserratBold
  },
  secondaryStyle:{
    flexDirection:'row',
    alignItems:'center',
//    backgroundColor:'red',
justifyContent:'space-between',
   width:screenWidth/2.7,
   marginVertical:6
  },
  timeContainer:{
    flexDirection:'row',
    backgroundColor:COLORS.greyColor,
    // marginLeft:42,
    borderRadius:20,
    paddingHorizontal:6,
    paddingVertical:4,
    alignItems:'center'
  },
  timerText:{
    fontSize:FONT_SIZE.h12,
    FONT_FAMILY:FONT_FAMILY.MontserratRegular,
    color:COLORS.secondaryColor,
    marginHorizontal:4
  }
});
