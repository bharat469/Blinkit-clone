import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListingBackground from '../../helpers/background/listingBackground'
import { ProductApi } from '../../helpers/constant/jsonHelper'
import ProductCard from '../../components/productCard'
import { COLORS } from '../../helpers/constant/colors'
import { FONT_FAMILY, FONT_SIZE } from '../../helpers/constant/fontSize'

const {width,height}= Dimensions.get('window')

const ListingPage = () => {
    const _renderData=({item,index})=>{
        return(
            <View style={styles.cardContainer}>
            <ProductCard
            product={{
                ProductName: item.ProductName,
                ProductQuantity: item.ProductQuantity,
                ProductMrp: item.ProductMrp,
                imagesArray: [item.images.image1, item.images.image2],
              }}
    
            />
            </View>
        )
    }
  return (
 <ListingBackground>
    <View style={styles.headerView}>
        <View style={styles.underLine} />
        <Text style={styles.groceriesText}>Groceries Items</Text>;
    </View>
    <FlatList
    data={ProductApi}
    renderItem={_renderData}
    keyExtractor={(item) => item.id.toString()}
    // horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.productList}
    numColumns={2}
    />
 </ListingBackground>
  )
}

export default ListingPage

const styles = StyleSheet.create({

      productList: {
          paddingHorizontal: 16,
        },
        cardContainer: {
            flex: 1,
            margin: 10,
      },
headerView:{
    alignItems:'center',
    marginTop:22
},

      underLine:{
        height:3.5,
        width:width/8,
        backgroundColor:COLORS.secondaryColor
      },
      groceriesText:{
        fontSize:FONT_SIZE.h20,
        marginVertical:6,
        fontFamily:FONT_FAMILY.MontserratBold
      }
})