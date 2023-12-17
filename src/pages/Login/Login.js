import React,{useState} from "react";
import { View,Text,Image,Pressable,TouchableOpacity,ScrollView } from "react-native";
import Input from "../../components/Input"
import styles from "./Login.styles"

import { faUser,faLock } from "@fortawesome/free-solid-svg-icons";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmit = async () => {
      print("Alperen")
    };
  
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
  
          <TouchableOpacity style={styles.primaryBtn} onPress={() => onSubmit()}>
            <Text style={{...styles.btnTextPrimary, color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

export default Login;