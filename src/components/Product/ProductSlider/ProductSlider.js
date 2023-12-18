import React,{useEffect,useState} from "react";
import { View,Text,Image,ScrollView,Pressable } from "react-native";
import styles from "./ProductSlider.styles";


const ProductSlider = ({navigation}) => {
    const {setProduct, getRandomProducts} = ProductStore;
  
    const [data, setData] = useState([]);
  
    useEffect(() => {
      setData(getRandomProducts());
    }, []);
  
    return (
      <ScrollView horizontal={true} style={styles.productSlider}>
        {data.map((x, i) => (
          <Pressable
            onPress={() => {
              setProduct(x);
              navigation.navigate('DetailScreen');
            }}
            key={i}
            style={styles.sliderItem}>
            <Image style={styles.sliderImg} source={{uri: x.imgs[0]}} />
            <Text style={styles.sliderText}>{x.name}</Text>
            <Text style={styles.sliderPrice}>${x.price}</Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  };

  export default ProductSlider;
  