import React from "react";
import { useState } from "react";
import { View,Text,TextInput, Button } from "react-native";
import styles from "./Crud.styles";
import { doc,setDoc,addDoc, collection,getDocs } from "@firebase/firestore";
import { db } from "../../database/firebase";


const Crud=()=>{

    const [name,setName]=useState("");
    const [category,setCategory]=useState(0);
    const [price,setPrice]=useState(0);
    const [image,setImage]=useState([]);
    const [description,setDescription]=useState("");

    function create(){

        // addDoc(collection(db,"Product"),{
        //     Category:category,
        //     Description:description,
        //     Image:image,
        //     Name:name,
        //     Price:price,
        // }).then(()=>{
        //     console.log("Data Submitted");
        // }).catch((error)=>{
        //     console.log(error);
        // });

        getDocs(collection(db,"Product")).then(docSnap=>{
            const products=[];
            docSnap.forEach((doc)=>{
                products.push({...doc.data(),id:doc.id})
            });
            console.log("Document Data:",products);
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Crud</Text>
            <TextInput value={name} onChangeText={(name)=>{setName(name)}} placeholder="Name" style={styles.textBoxes}></TextInput>
            <TextInput value={category} onChangeText={(category)=>{setCategory(category)}} placeholder="Category" style={styles.textBoxes}></TextInput>
            <TextInput value={price} onChangeText={(price)=>{setPrice(price)}} placeholder="Price" style={styles.textBoxes}></TextInput>
            <TextInput value={image} onChangeText={(image)=>{setImage(image)}} placeholder="Image" style={styles.textBoxes}></TextInput>
            <TextInput value={description} onChangeText={(description)=>{setDescription(description)}} placeholder="Description" style={styles.textBoxes}></TextInput>

            <Button color="red" onPress={create} title="Submit"></Button>

        </View>
    );
}

export default Crud;