import React,{useState} from "react";
import { View,Text,TouchableWithoutFeedback,Image,Pressable,ImageBackground } from "react-native";
import styles from "./AdminProduct.styles"
import { faTrashCan,faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {deleteDoc,doc } from "@firebase/firestore";
import { db } from "../../database/firebase";


const AdminProduct=({navigation,products,onRemove})=>{

    const background = require("../../../assets/icons/admin_background.jpg");

    function removeProducts(){
        deleteDoc(doc(db,"Product",products.id)).then(()=>{
            onRemove(products.id)
        })
    }

    const handleProductSelect= id => {
        navigation.navigate("UpdateScreen",{id});
    };



    return(
        <ImageBackground source={background}>
            <View style={styles.main_container}>
            <View style={styles.container}>
            <Image style={styles.image} source={{uri: products.Image[0]}}/>
            <Text style={styles.text}>{products.Name}</Text>
            <Pressable
            onPress={() => removeProducts(products.id)}
            style={{position: 'absolute', right: 5, bottom: 5}}>
            <FontAwesomeIcon color="red" icon={faTrashCan} />
            </Pressable>
            <Pressable
            onPress={()=>handleProductSelect(products.id)}
            style={{position: 'absolute', right: 30, bottom: 5}}>
            <FontAwesomeIcon color="black" icon={faEdit} />
            </Pressable>
            </View>
            </View>
        </ImageBackground>
        
        
    );
}

export default AdminProduct;