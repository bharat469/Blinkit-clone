import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import MostRecentlyUsedItemView from './mostRecentlyUsedItem'; // Import the MostRecentlyUsedItemView component


const MostRecentUsedItemList = () => {
  // Sample data to populate the FlatList
  const data = [1, 2, 3,]; // You can change this data as needed

  // Render function for FlatList
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <MostRecentlyUsedItemView />
        <Text>Sagar</Text>
      </View>
    );
  };
``
  return (
    <View style={styles.container}>
        <Text style={{marginHorizontal:5}}>"Most Recently Used"</Text>
      <FlatList
        data={data} // Pass the data array
        renderItem={renderItem} // Renders MostRecentlyUsedItemView for each item
        keyExtractor={(item) => item.toString()} // Key extractor for list items
        showsHorizontalScrollIndicator={false} // Hides horizontal scrollbar
        contentContainerStyle={{  }} // Padding to make it more visually pleasing
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Ensure container takes up all available space
    // backgroundColor: '#f4f4f4',
    // marginVertical:20
  },
  itemContainer: {
    marginHorizontal:5,
    width:  120, // Set a fixed width for each grid item
    height: 120, // Set a fixed height for each grid item
  },
});

export default MostRecentUsedItemList;
