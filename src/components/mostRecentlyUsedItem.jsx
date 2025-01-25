import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../helpers/constant/colors';

const MostRecentlyUsedItemView = ({data={}}) => {
  console.log('DJHKHD',data)
  return (
    <View style={styles.container}>
      <View style={styles.gridItem}>
        <Image source={data?.image1} style={{width:45,height:45}} />
      </View>
      <View style={styles.gridItem}>
      <Image source={data?.image2} style={{width:45,height:45}} />
      </View>
      <View style={styles.gridItem}>
      <Image source={data?.image3} style={{width:45,height:45}} />
      </View>
      <View style={styles.gridItem}>
      <View style={styles.overlay}>
          <Text style={[styles.text,{color:COLORS.whiteColor}]}>+</Text>
        </View>
        <Image source={data?.image4} style={{width:45,height:45}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically centers the items
    width: '100%',
    height: '100%',

    paddingHorizontal:5,
    borderRadius:10
  },
  gridItem: {
    width: '48%', // makes two items per row (you can adjust to suit)
    height: '46%', // ensures items fill the available height
    backgroundColor: '#fff', // White background for the grid items
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    position: 'relative', // For overlay positioning
    overflow: 'hidden', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire grid item
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Brings the overlay on top of the image
  },
});

export default MostRecentlyUsedItemView;
