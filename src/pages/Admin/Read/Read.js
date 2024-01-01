import React from "react";
import { View,Text,FlatList, Button } from "react-native";
import styles from "./Read.styles"
import {collection,updateDoc,getDocs} from "@firebase/firestore";
import { db } from "../../../database/firebase";

const Read=()=>{
    return(
        getDocs(collection(db,"Product")).then(docSnap=>{
            let products=[];
            docSnap.forEach((doc)=>{
                products.push({...doc.data(),id:doc.id})
            });
            console.log("Data:",products)
        })
    );
}
export default Read;