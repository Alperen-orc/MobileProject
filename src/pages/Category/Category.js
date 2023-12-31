import React from "react";
import { View,Text } from "react-native";
import Categories from "../../components/Categories";
import ProductGrid from "../../components/Product/ProductGrid";

const Category=({navigation})=>{
    return(
        <View>
      <View>
        <Categories />
      </View>

      <ProductGrid byCategory={true} navigation={navigation} />
    </View>
    );
}

export default Category