import React,{useState,useEffect,useCallback} from "react";
import { View,Text,ScrollView,TextInput,FlatList,TouchableOpacity,BackHandler} from "react-native";

import ProductGrid from "../../components/Product/ProductGrid";
import ProductSlider from "../../components/Product/ProductSlider";
import ProductCarousel from "../../components/Product/ProductCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import styles from "./Dashboard.styles"



const Dashboard=({navigation})=>{
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);

  const handleBackButtonClick = () => {
    setSearching(false);
    setSearchText('');
    setSearched(false);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const [fontsLoaded,fontError] = useFonts({
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),

  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

    return(
        <View>
        <View style={styles.searchBar}>
          <TextInput
            value={searchText}
            onChangeText={e => setSearchText(e)}
            style={searching ? styles.searchInputFocused : styles.searchInput}
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
            selectionColor="#000"
          />
          <TouchableOpacity
            onPress={() => searchText.length > 0 && setSearched(true)}
            style={styles.searchBtn}>
            <FontAwesomeIcon
              style={{color: '#000', marginRight: 10}}
              icon={faSearch}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{paddingTop: 70}}>
          {/* <Header heading="" navigation={navigation} /> */}
  
          {searched ? (
            <>
              <ProductGrid navigation={navigation} searchText={searchText} />
            </>
          ) : (
            <>
              <Text style={[styles.heading,{fontFamily:"Poppins-SemiBold"}]}>Keşfet</Text>
              {/* <Categories /> */}
              <ProductCarousel navigation={navigation} />
              <Text style={[styles.heading,{fontFamily:"Poppins-SemiBold"}]}>Popüler Ürünler</Text>
              <ProductSlider navigation={navigation} />
              <Text style={[styles.heading,{fontFamily:"Poppins-SemiBold"}]}>Senin İçin Önerilenler</Text>
              <ProductSlider navigation={navigation} />
              <View style={{height: 100}}></View>
            </>
          )}
        </ScrollView>
      </View>
    );
}

export default Dashboard;