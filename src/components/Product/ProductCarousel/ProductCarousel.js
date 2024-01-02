import React,{useState,useRef,useEffect,useCallback} from "react";
import { View,Text,Dimensions,StyleSheet,Platform,Pressable } from "react-native";
import Carousel,{ParallaxImage} from "react-native-snap-carousel-v4";
import { observer } from "mobx-react";
import { ProductStore } from "../../../store/product";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import styles from "./ProductCarousel.styles"

const {width: screenWidth} = Dimensions.get('window');


const ProductCarousel = observer(({navigation}) => {
    const {
      state: {products},
      getProducts,
      setProduct,
    } = ProductStore;
  
    const carouselRef = useRef(null);
  
    useEffect(() => {
      getProducts();
    }, []);

    const [fontsLoaded,fontError] = useFonts({
      'Poppins-Regular': require('../../../../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('../../../../assets/fonts/Poppins-Bold.ttf'),
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
  
    const renderItem = ({item}, parallaxProps) => {
      return (
        <Pressable
          onPress={() => {
            setProduct(item);
            navigation.navigate('ProductScreen');
          }}
          style={styles.item}>
          <ParallaxImage
            source={{uri: item.Image[0]}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
  
          <View onLayout={onLayoutRootView} style={styles.details}>
            <View>
              <Text style={[styles.name,{fontFamily:"Poppins-Bold"}]}>{item.Name}</Text>
              <Text style={[styles.description,{fontFamily:"Poppins-Regular"}]}>
                {item.Description.slice(0, 200)}...
              </Text>
            </View>
  
            <View style={[styles.price,{fontFamily:"Poppins-SemiBold"}]}>
              <Text style={{fontSize: 16}}>${item.Price}</Text>
            </View>
          </View>
        </Pressable>
      );
    };
  
    return (
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={products}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    );
  });

export default ProductCarousel;