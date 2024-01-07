import React,{useState} from "react";
import { View,Text,Pressable,ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./Orders.styles"
const Orders = ({navigation}) => {
    const [selected, setSelected] = useState('ongoing');
  
    return (
      <View>
        <View style={styles.switch}>
          <Pressable
            onPress={() => setSelected('ongoing')}
            style={
              selected === 'ongoing' ? styles.switchBtnSelected : styles.switchBtn
            }>
            <Text
              style={
                selected === 'ongoing'
                  ? styles.switchTextSelected
                  : styles.switchText
              }>
              Siparişler
            </Text>
          </Pressable>
         
        </View>
        <ScrollView style={{padding: 20}}>
          <Pressable
            onPress={() => navigation.navigate('OrderScreen')}
            style={styles.orderItem}>
            <View>
              <Text style={styles.orderNo}>Sipariş Numarası 1</Text>
              <Text style={styles.orderItemCount}>3 ürün</Text>
            </View>
            <View
              style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
              <FontAwesomeIcon icon={faChevronDown} />
              <Text style={styles.orderDate}>Date: 07.01.2024</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
    );
  };
  
  export default Orders;
  