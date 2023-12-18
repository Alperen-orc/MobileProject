import React,{useState,useRef,useEffect} from "react";
import { View,Text,Dimensions,StyleSheet,Platform,Pressable } from "react-native";
import Carousel,{ParallaxImage} from "react-native-snap-carousel-v4";
import { observer } from "mobx-react";
import { ProductStore } from "../../../store/product";

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
  
    const renderItem = ({item}, parallaxProps) => {
      return (
        <Pressable
          onPress={() => {
            setProduct(item);
            navigation.navigate('DetailScreen');
          }}
          style={styles.item}>
          <ParallaxImage
            source={{uri: item.imgs[0]}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
  
          <View style={styles.details}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>
                {item.description.slice(0, 200)}...
              </Text>
            </View>
  
            <View style={styles.price}>
              <Text style={{fontSize: 16}}>${item.price}</Text>
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