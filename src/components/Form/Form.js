import React, { useState } from "react";
import { View,Text,TextInput, Button } from "react-native";
import styles from "./Form.styles"

const Form=()=>{

    const[category,setCategory]=useState("")
    const[name,setName]=useState("")
    const[imageUrl,setImageUrl]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescription]=useState("")


    function create(){

    }

    return(
        <View>
            <Text style={styles.container}>CRUD Form</Text>
            <TextInput value={category} onChangeText={(category)=>{setCategory(category)}} placeholder="Category" style={styles.textBoxes}></TextInput>
            <TextInput value={name} onChangeText={(name)=>{setName(name)}} placeholder="Name" style={styles.textBoxes}></TextInput>
            <TextInput value={imageUrl} onChangeText={(imageUrl)=>{setImageUrl(imageUrl)}} placeholder="Image Url" style={styles.textBoxes}></TextInput>
            <TextInput value={price} onChangeText={(price)=>{setPrice(price)}} placeholder="Price" style={styles.textBoxes}></TextInput>
            <TextInput value={description} onChangeText={(description)=>{setDescription(description)}} placeholder="Description" style={styles.textBoxes}></TextInput>
            <Button onPress={create}>Submit Data</Button>
        </View>
    );
}

export default Form;