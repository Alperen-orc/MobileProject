import React from "react";
import { View,Text, Button } from "react-native";

import styles from "./Product.styles"

const Product=({navigation})=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Product</Text>
            <Button style={styles.button} title="Details" onPress={()=>navigation.navigate("DetailScreen")}></Button>
        </View>
    );
}

export default Product;