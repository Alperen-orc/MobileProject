import React,{useState} from "react";
import { View,Text,Image,Pressable,TouchableOpacity,ScrollView } from "react-native";
import Input from "../../components/Input"
import styles from "./Login.styles"
import { AuthStore } from "../../store/auth";

import {auth} from "../../database/firebase"
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

import { faUser,faLock } from "@fortawesome/free-solid-svg-icons";

const Login = ({navigation}) => {
    let [errorMessage, setErrorMessage] = useState("");
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
  
    let login = () => {
      if (email !== "" && password !== "") {
        AuthStore.login({email: email, password: password});
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            if (user.email === 'alperen.oruc@ogr.sakarya.edu.tr' && password === 'b201210047') {
              navigation.navigate("AdminScreen", { user: user });
            } else {
              // Diğer durumlar için normal yönlendirme
              navigation.navigate("Main", { user: user });
            }
            setErrorMessage("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {

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
            Sign in
          </Text>
  
          <Input
            text={email}
            setText={setEmail}
            icon={faUser}
            placeholder="Enter email"
          />
  
          <Input
            text={password}
            setText={setPassword}
            placeholder="Enter password"
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
              Create an account
            </Text>
          </Pressable>
  
          <TouchableOpacity style={styles.primaryBtn} onPress={() => login()}>
            <Text style={{...styles.btnTextPrimary, color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

export default Login;