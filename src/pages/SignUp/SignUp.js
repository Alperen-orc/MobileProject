import React,{useState,useEffect} from "react";
import { View,Pressable,TouchableOpacity,ScrollView,Text,Image } from "react-native";
import Input from "../../components/Input"
import styles from "./SignUp.styles"
import { faUser,faLock,faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {auth} from "../../database/firebase"
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

const SignUp = ({navigation}) => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setconfirmPassword] = useState('');

  
    let signUp = () => {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser);
          navigation.navigate("Main", { user: userCredential.user });
        })
        .catch((error) => {
          setValidationMessage(error.message);
        });
      }
    }
  
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../../assets/icons/Login.jpg')}
        />
        <ScrollView style={{...styles.form}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: '#000',
              marginBottom: 20,
            }}>
            Hesap Oluşturun
          </Text>
  
          <Input
            text={name}
            setText={setName}
            placeholder="İsim Giriniz"
            icon={faUser}
          />
          <Input
            text={email}
            setText={setEmail}
            placeholder="Email Giriniz"
            icon={faEnvelope}
          />
          <Input
            password={true}
            text={password}
            setText={setPassword}
            placeholder="Şifre Giriniz"
            icon={faLock}
          />
          <Input
            password={true}
            text={confirmPassword}
            setText={setconfirmPassword}
            placeholder="Şifre Tekrarı"
            icon={faLock}
          />
  
          <Pressable
            style={{alignSelf: 'flex-end', marginVertical: 10}}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={{
                color: 'gray',
                textDecorationColor: 'gray',
                textDecorationLine: 'underline',
              }}>
              Bir hesabınız var mı?
            </Text>
          </Pressable>
  
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => {
              // Register();
              // navigation.navigate('Dashboard', {parama: [], auth: true});
              signUp();
            }}>
            <Text style={{color: '#fff'}}>Kayıt Ol</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

export default SignUp;