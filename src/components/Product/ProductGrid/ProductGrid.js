import React,{useState,useEffect} from "react";
import { View,Text,Image,ScrollView,Pressable } from "react-native";
import styles from "./ProductGrid.styles"
import { observer } from "mobx-react";
import { ProductStore } from "../../../store/product";

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
  
    return (
      <View>
        {!byCategory && (
          <Text style={styles.searchText}>
            {searchedProducts.length === 0 && 'no'} search results for "
            {searchText}"
          </Text>
        )}
        <ScrollView contentContainerStyle={styles.productGrid}>
          {searchedProducts.map((x, i) => (
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
          <View style={{height: 350}}></View>
        </ScrollView>
      </View>
    );
  });
  
  export default ProductGrid;