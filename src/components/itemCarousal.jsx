import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/fontSize';
import {COLORS} from '../helpers/constant/colors';
import {MODE_NAME} from '../helpers/constant/mode';
import MostRecentlyUsedItemView from './mostRecentlyUsedItem';

const ItemCarousal = ({
  carosalTitle = '',
  Mode = '',
  data = [],
  onNavigate = () => {},
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const _handleSelectedCategories = ({item, index}) => {
    setSelectedIndex(index);
    onNavigate(item?.categoryName);
  };

  const _renderItem = ({item, index}) => {
    let isSelected = index == selectedIndex;
    return (
      <TouchableWithoutFeedback
        onPress={() => _handleSelectedCategories({item, index})}>
        <View style={styles.containerStyle}>
          <View
            style={[
              styles.imageView,
              isSelected && {
                backgroundColor: COLORS.shadesOfPrimaryColor.shade2,
              },
            ]}>
            {item?.imageCategory}
          </View>
          <Text
            style={[
              styles.categoriesTitle,
              isSelected && {color: COLORS.shadesOfPrimaryColor.shade2},
            ]}>
            {item?.categoryName}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const _renderRecentlyUsed = ({item, index}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={{alignItems: 'center'}}>
          <View style={[styles.itemContainer,{marginVertical:12}]}>
            <MostRecentlyUsedItemView data={item?.imageStack} />
          </View>
          <Text style={styles.categoriesTitle}>{item?.itemName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{}}>
      <Text style={styles.carosalTitle}>{carosalTitle}</Text>
      <FlatList
        data={data}
        renderItem={
          Mode === MODE_NAME.RECENTLY_USED ? _renderRecentlyUsed : _renderItem
        }
        horizontal
        contentContainerStyle={{marginVertical: 22}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ItemCarousal;

const styles = StyleSheet.create({
  carosalTitle: {
    // marginVertical:6,

    fontSize: FONT_SIZE.h20,
    fontFamily: FONT_FAMILY.MontserratBold,
    color: COLORS.secondaryColor,
  },
  containerStyle: {
    padding: 12,
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: COLORS.whiteColor,
    padding: 12,
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    borderColor: COLORS.whiteColor,
  },
  categoriesTitle: {
    fontSize: FONT_SIZE.h16,
    color: COLORS.secondaryColor,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
  },
  itemContainer: {
    marginHorizontal: 12,
    marginTop: 6,
    width: 120,
    height: 120,
    backgroundColor:COLORS.lightBlueBg,
    borderRadius: 12,
    padding: 6,
  },
});
