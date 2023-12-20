import React,{useEffect,useState,useCallback} from "react";
import { View,Text,Image,ScrollView,Pressable } from "react-native";
import styles from "./ProductSlider.styles";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


import { ProductStore } from "../../../store/product";


const ProductSlider = ({navigation}) => {

 
    const {setProduct, getRandomProducts} = ProductStore;
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
      setData(getRandomProducts());
    }, []);

    const [fontsLoaded,fontError] = useFonts({
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
      <ScrollView  onLayout={onLayoutRootView} horizontal={true} style={styles.productSlider}>
        {data.map((x, i) => (
          <Pressable
            onPress={() => {
              setProduct(x);
              navigation.navigate('ProductScreen');
            }}
            key={i}
            style={styles.sliderItem}>
            <Image style={styles.sliderImg} source={{uri: x.imgs[0]}} />
            <Text style={{fontFamily:"Poppins-Regular"}}>{x.name}</Text>
            <Text style={{fontFamily:"Poppins-Regular"}}>${x.price}</Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  };

  export default ProductSlider;
  