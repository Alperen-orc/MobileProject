import React,{useState,useEffect,useCallback} from "react";
import { View,Text,Image,ScrollView,Pressable } from "react-native";
import styles from "./ProductGrid.styles"
import { observer } from "mobx-react";
import { ProductStore } from "../../../store/product";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const ProductGrid = observer(({searchText, navigation, byCategory}) => {

    const {
      state: {searchedProducts, category},
      setProduct,
      getSearchedProducts,
      getProductsByCategories,
    } = ProductStore;
  
    useEffect(() => {
      byCategory
        ? getProductsByCategories(category)
        : getSearchedProducts(searchText);
    }, [category]);

    const [fontsLoaded,fontError] = useFonts({
      'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('../../../../assets/fonts/Poppins-SemiBold.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }
  
    return (
      <View onLayout={onLayoutRootView}>
        {!byCategory && (
          <Text style={[styles.searchText,{fontFamily:"Poppins-Regular"}]}>
            {searchedProducts.length === 0 && 'no'} search results for "
            {searchText}"
          </Text>
        )}
        <ScrollView contentContainerStyle={styles.productGrid}>
          {searchedProducts.map((x, i) => (
            <Pressable
              onPress={() => {
                setProduct(x);
                navigation.navigate('ProductScreen');
              }}
              key={i}
              style={styles.sliderItem}>
              <Image style={styles.sliderImg} source={{uri: x.Image[0]}} />
              <Text style={{fontFamily:"Poppins-SemiBold"}}>{x.Name}</Text>
              <Text style={{fontFamily:"Poppins-Regular"}}>${x.Price}</Text>
            </Pressable>
          ))}
          <View style={{height: 350}}></View>
        </ScrollView>
      </View>
    );
  });
  
  export default ProductGrid;