import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './Update.styles';
import React,{useState} from 'react';
import {addDoc, collection,updateDoc} from "@firebase/firestore";
import { db } from '../../../database/firebase';

export default function Update({ navigation,id }) {
  const background = require("../../../../assets/icons/admin_background.jpg");


  const [name,setName]=useState("");
  const [category,setCategory]=useState(0);
  const [price,setPrice]=useState(0);
  const [image,setImage]=useState([]);
  const [description,setDescription]=useState("");
  const [errorMessage, setErrorMessage]=useState("");

  let save = () => {

         updateDoc(doc(db,"Product",id),{
             Category:category,
             Description:description,
             Image:image,
             Name:name,
             Price:price,
         }).then(()=>{
             console.log("Data Updated");
         }).catch((error)=>{
             console.log(error);
         });
    navigation.navigate("AdminScreen")     
  }

  return (
    <ImageBackground style={styles.imageContainer} source={background}>
      <KeyboardAvoidingView 
        style={styles.backgroundCover} 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[styles.lightText, styles.header]}>Update Product</Text>
        <Text style={styles.errorText}>{errorMessage}</Text>
        <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Name' 
          placeholderTextColor="#BEBEBE"
          value={name}
          onChangeText={(name)=>{setName(name)}} />
        <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Category' 
          placeholderTextColor="#BEBEBE" 
          value={category} 
          onChangeText={(category)=>{setCategory(category)}} />
          <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Price' 
          placeholderTextColor="#BEBEBE"
          value={price}
          onChangeText={(price)=>{setPrice(price)}} />
        <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Image' 
          placeholderTextColor="#BEBEBE" 
          value={image} 
          onChangeText={(image)=>{setImage(image)}} />
        <TextInput 
          style={[styles.textInput, styles.lightTextInput, styles.lightText]} 
          placeholder='Description' 
          placeholderTextColor="#BEBEBE" 
          value={description} 
          onChangeText={(description)=>{setDescription(description)}} />
        <Button title="Save" onPress={save} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}


