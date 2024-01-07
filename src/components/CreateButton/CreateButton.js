import React from "react";
import { View,TouchableWithoutFeedback,Text } from "react-native";
import styles from "./CreateButton.styles"

const CreateButton=({onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.main_container}>
        <View style={styles.container}>
            <Text style={styles.text}>Ürün Ekle</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
    );
    
}

export default CreateButton;