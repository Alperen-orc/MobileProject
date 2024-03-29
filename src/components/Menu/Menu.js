import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from "./Menu.styles"

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faBoxes,faCartShopping,faCheckCircle,faChevronRight,faHeart,faHome } from "@fortawesome/free-solid-svg-icons";
import  Svg,{Path}  from "react-native-svg";
const Menu = ({navigationRef}) => {
    console.log(navigationRef.current?.getCurrentRoute());
  
    return (
      <View style={styles.menu}>
        <View style={styles.menuTop}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Svg height="50" width="50" viewBox="0 0 448 512">
              <Path
                fill="#21282F"
                d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z"
              />
            </Svg>
            <Text style={{...styles.headerText, fontSize: 24}}>Shopping</Text>
          </View>
        </View>
  
        <View style={styles.menuOptions}>
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => navigationRef.navigate('DashboardScreen')}>
            <FontAwesomeIcon icon={faHome} />
            <Text style={styles.menuText}>Ana Ekran</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => navigationRef.navigate('WishlistScreen')}>
            <FontAwesomeIcon icon={faHeart} />
            <Text style={styles.menuText}>İsteklerim</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => navigationRef.navigate('CartScreen')}>
            <FontAwesomeIcon icon={faCartShopping} />
            <Text style={styles.menuText}>Sepetim</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => navigationRef.navigate('CategoryScreen')}>
            <FontAwesomeIcon icon={faBoxes} />
            <Text style={styles.menuText}>Kategoriler</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.menuOption}
            onPress={() => navigationRef.navigate('OrdersScreen')}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <Text style={styles.menuText}>Siparişlerim</Text>
            <FontAwesomeIcon color="#ccc" icon={faChevronRight} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Menu;
  