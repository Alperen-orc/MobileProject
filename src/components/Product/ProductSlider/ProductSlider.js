import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import styles from "./ProductSlider.styles";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ProductStore } from "../../../store/product";

const ProductSlider = ({ navigation }) => {
  const { setProduct, getRandomProducts } = ProductStore;
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const products = await getRandomProducts();
      // Eğer products undefined değilse, datayı güncelle
      if (products) {
        setData(products);
      } else {
        console.log("Products is undefined");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [getRandomProducts]);

  useEffect(() => {
    fetchData();
  }, [fetchData, data]); // data bağımlılığı eklendi


  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
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
    <ScrollView onLayout={onLayoutRootView} horizontal={true} style={styles.productSlider}>
      {
      data.map((x, i) => (
        <Pressable
          onPress={() => {
            setProduct(x);
            navigation.navigate('ProductScreen');
          }}
          key={i}
          style={styles.sliderItem}>
          <Image style={styles.sliderImg} source={{ uri: x.Image[0] }} />
          <Text style={{ fontFamily: "Poppins-Regular" }}>{x.Name}</Text>
          <Text style={{ fontFamily: "Poppins-Regular" }}>${x.Price}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ProductSlider;
