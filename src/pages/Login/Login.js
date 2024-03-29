import React,{useState} from "react";
import { View,Text,Image,Pressable,TouchableOpacity,ScrollView } from "react-native";
import Input from "../../components/Input"
import styles from "./Login.styles"
import { AuthStore } from "../../store/auth";

import {auth} from "../../database/firebase"
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

import { faUser,faLock } from "@fortawesome/free-solid-svg-icons";
import { err } from "react-native-svg";

const Login = ({navigation}) => {
    let [errorMessage, setErrorMessage] = useState("");
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
  

    let login = () => {
      if (email !== "" && password !== "") {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            AuthStore.login(email,password)
            console.log("User Info:",userCredential.user)
            if (userCredential.user.email === 'alperen.oruc@ogr.sakarya.edu.tr') {
              console.log("Admin ekranına yönlendiriliyor")
              navigation.navigate("AdminScreen");
            } else {
              // Diğer durumlar için normal yönlendirme
              console.log("Main ekranına yönlendiriliyor")
              navigation.navigate("Main", { user: userCredential.user });
            }
            setErrorMessage("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            console.error("Giris Hatası:",error)
            setErrorMessage(error.message)
          });
      } else {
        setErrorMessage("Please enter an email and password");
      }
    }

    return (
      <View style={styles.container}>
        <View style={{marginVertical: 30}}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../../../assets/icons/Login.jpg')}
          />
        </View>
  
        <ScrollView style={styles.form}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: '#000',
              marginBottom: 20,
            }}>
            Giriş Yap
          </Text>
  
          <Input
            text={email}
            setText={setEmail}
            icon={faUser}
            placeholder="Email Giriniz"
          />
  
          <Input
            text={password}
            setText={setPassword}
            placeholder="Şifre Giriniz"
            password={true}
            icon={faLock}
          />
  
          <Pressable
            style={{alignSelf: 'flex-end', marginVertical: 10}}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text
              style={{
                color: 'gray',
                textDecorationColor: 'gray',
                textDecorationLine: 'underline',
              }}>
              Hesap Oluştur
            </Text>
          </Pressable>
  
          <TouchableOpacity style={styles.primaryBtn} onPress={() => login()}>
            <Text style={{...styles.btnTextPrimary, color: '#fff'}}>Giriş</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

export default Login;