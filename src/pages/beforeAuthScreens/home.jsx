import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_SAVE_NAME} from '../../helpers/constant/asyncSaveName';
import {useDispatch} from 'react-redux';
import {resetAll} from '../../helpers/redux/slice.js/authSlice';
import {ROUTE_NAME} from '../../helpers/constant/routeNames';
import MainPageBackground from '../../helpers/background/mainPageBackground';
import InputComponent from '../../components/inputComponent';
import {MODE_NAME} from '../../helpers/constant/mode';
import {COLORS} from '../../helpers/constant/colors';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_FAMILY, FONT_SIZE} from '../../helpers/constant/fontSize';
import WelcomeText from '../../assets/svg/welcomeText.svg';
import ItemCarousal from '../../components/itemCarousal';
import {Categories, MostRecentItems, ProductApi} from '../../helpers/constant/jsonHelper';
import MostRecentUsedItemList from '../../components/MostRecentlyUsedItemList';

const {Height, Width} = Dimensions.get('window');
const HomeScreen = props => {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const _handleLogout = async () => {
    await AsyncStorage.removeItem(ASYNC_SAVE_NAME.USER_TOKEN);
    dispatch(resetAll());
  };
  const _handleListingPage = (catName) => {
    props.navigation.navigate(ROUTE_NAME.listingScreen,{categories:catName});
  };

  return (
    // <View style={{flex:1,justifyContent:'center'}}>
    //     <View>
    //   <Button
    // btnTitle='Listing page'
    // onPress={_handleListingPage}
    //   />
    //   <Button
    // btnTitle='Logout'
    // onPress={_handleLogout}
    //   />

    //     </View>
    // </View>
    <MainPageBackground>
     
        <View style={styles.mainContainer}>
          <InputComponent
            mode={MODE_NAME.SEARCH_INPUT_BTN}
            placeholder='Search "Chocolate"'
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />

          <LinearGradient
            colors={['rgba(231, 176, 15, 0.1)', 'rgba(231, 176, 15, 1)']}
            style={styles.innerSection}>
            <View style={{width: '100%'}}>
              <Image
                source={require('../../assets/Banner2.png')}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
        </View>
        <View style={styles.outerSection}>
          <ItemCarousal carosalTitle="Categories" data={Categories} onNavigate={_handleListingPage}/>
          <ItemCarousal carosalTitle="Most Recently Used" data={MostRecentItems} onNavigate={_handleListingPage} Mode={MODE_NAME.RECENTLY_USED}/>
       
        </View>
     
    </MainPageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  innerSection: {
    alignItems: 'center',
    marginVertical: 12,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    top: 12,
  },
  textContainer: {
    marginVertical: 12,
    alignItems: 'center',
  },
  headerText: {
    fontSize: FONT_SIZE.h28,
    fontFamily: FONT_FAMILY.MontserratBoldItalic,
  },
  imageStyle: {
    width: Width,
  },
  outerSection: {
    flex:1,
    marginVertical: 22,
    marginHorizontal:26,
    
  },
  mainContainer: {
    backgroundColor: '#eacc77',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
