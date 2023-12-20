import React,{useCallback} from "react";
import { View,Text,Pressable,Image } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight,faCreditCard,faHeart, faLocationPin,faReceipt,faUser, } from "@fortawesome/free-solid-svg-icons";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import styles from "./Profile.styles"

const Profile = ({navigation}) => {
    const [fontsLoaded,fontError] = useFonts({
        'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
      });
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return (
      <View>
        <View style={styles.profile}>
          <Image
            style={{width: 150, height: 150}}
            source={{
              uri: 'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png',
            }}
          />
          <Text style={[styles.profileName,{fontFamily:"Poppins-Regular"}]}>Musabbiha Noor</Text>
        </View>
  
        <View style={styles.menuOptions}>
          <Pressable style={styles.menuOption}>
            <FontAwesomeIcon color="#ccc" icon={faUser} />
            <Text style={[styles.menuText,{fontFamily:"Poppins-SemiBold"}]}>Edit Profile</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </Pressable>
  
          <Pressable style={styles.menuOption}>
            <FontAwesomeIcon color="#ccc" icon={faLocationPin} />
            <Text style={[styles.menuText,{fontFamily:"Poppins-SemiBold"}]}>Shopping Address</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </Pressable>
  
          <Pressable style={styles.menuOption}>
            <FontAwesomeIcon color="#ccc" icon={faHeart} />
            <Text style={[styles.menuText,{fontFamily:"Poppins-SemiBold"}]}>Wishlist</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </Pressable>
  
          <Pressable style={styles.menuOption}>
            <FontAwesomeIcon color="#ccc" icon={faReceipt} />
            <Text style={[styles.menuText,{fontFamily:"Poppins-SemiBold"}]}>Orders</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </Pressable>
  
          <Pressable style={styles.menuOption}>
            <FontAwesomeIcon color="#ccc" icon={faCreditCard} />
            <Text style={[styles.menuText,{fontFamily:"Poppins-SemiBold"}]}>Cards</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </Pressable>
        </View>
      </View>
    );
  };
  
  export default Profile;