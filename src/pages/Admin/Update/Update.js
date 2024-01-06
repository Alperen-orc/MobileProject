import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './Update.styles';
import React, { useState, useEffect } from 'react';
import { updateDoc, doc } from "@firebase/firestore";
import { db } from '../../../database/firebase';
import Notification from '../Notification';
import * as Notifications from 'expo-notifications';

export default function Update({ navigation }) {
  const background = require("../../../../assets/icons/admin_background.jpg");
  const route = useRoute();
  const { id } = route.params;

  const [name, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const products = Notification();

  useEffect(() => {
    // Uygulama başlangıcında notification handler'ı set et
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  }, []);

  const sendNotification = async (title, body) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger: null, // Anlık bildirim için trigger null olarak bırakılabilir
    });
  };

  let save = async () => {
    if (name !== undefined && category !== undefined && price !== undefined && description !== undefined) {
      try {
        await updateDoc(doc(db, "Product", id), {
          Category: category,
          Description: description,
          Name: name,
          Price: price,
        });
        console.log("Data Updated");
      } catch (error) {
        console.log(error);
        setErrorMessage("Error updating data");
      }
    } else {
      setErrorMessage("All fields are required");
    }

    const existingProduct = products.find((p) => p.id === id);

    // Fiyat değişikliği kontrolü
    if (existingProduct && existingProduct.Price !== price) {
      console.log(`Ürün (${id}) fiyatı değişti! Yeni Fiyat:`, price);
      sendNotification('Ürün Fiyatı Değişikliği', `Ürün (${id}) fiyatı değişti! Yeni Fiyat: ${price}`);
    }
  };

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
          onChangeText={(name) => { setName(name) }} />
        <TextInput
          style={[styles.textInput, styles.lightTextInput, styles.lightText]}
          placeholder='Category'
          placeholderTextColor="#BEBEBE"
          value={category ? category.toString() : ''}
          onChangeText={(category) => { setCategory(parseInt(category) || 0) }} />
        <TextInput
          style={[styles.textInput, styles.lightTextInput, styles.lightText]}
          placeholder='Price'
          placeholderTextColor="#BEBEBE"
          value={price ? price.toString() : ''}
          onChangeText={(price) => { setPrice(parseFloat(price) || 0) }} />
        <TextInput
          style={[styles.textInput, styles.lightTextInput, styles.lightText]}
          placeholder='Description'
          placeholderTextColor="#BEBEBE"
          value={description}
          onChangeText={(description) => { setDescription(description) }} />
        <Button title="Save" onPress={save} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
