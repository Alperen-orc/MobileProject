import React from "react";
import { View,Text,Pressable,Image } from "react-native";
import  Svg,{Path}  from "react-native-svg";
import styles from "./Header.styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ProductStore } from "../../store/product";
import { observer } from "mobx-react";

const Header = observer(({navigationRef, hideCart, setOpenMenu}) => {
    const {
      state: {cart},
    } = ProductStore;
  
    return (
      <View style={styles.header}>
        <Pressable onPress={() => setOpenMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
        </Pressable>
  
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Svg height="30" width="30" viewBox="0 0 448 512">
            <Path
              fill="#21282F"
              d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z"
            />
          </Svg>
          <Text style={styles.headerText}>Shopping</Text>
        </View>
  
        {!hideCart && (
          <Pressable
            onPress={() => navigationRef.navigate('CartScreen')}
            style={{
              flexDirection: 'row',
              width: 20,
              height: 20,
              marginHorizontal: 10,
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../assets/icons/bag.png')}
            />
            {cart.length > 0 && (
              <Text
                style={{
                  backgroundColor: 'red',
                  color: '#fff',
                  width: 15,
                  height: 15,
                  top: -7,
                  right: 7,
                  textAlign: 'center',
                  borderRadius: 10,
                  fontSize: 10,
                }}>
                {cart.length}
              </Text>
            )}
          </Pressable>
        )}
      </View>
    );
  });

export default Header;