import React,{useState} from "react";
import { View,Text,Image,ScrollView,TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressCard,faPhone,faUser } from "@fortawesome/free-solid-svg-icons";
import { ProductStore } from "../../store/product";
import { toJS } from 'mobx';
import LottieView from "lottie-react-native";

const todayString = new Date().toISOString().split('T')[0];
const todayDate = new Date(todayString);
const currentTimeString = todayDate.toLocaleTimeString();

const Order = ({navigation}) => {

const {
  state: {cart},
} = ProductStore;

const copiedCart = toJS(cart);

const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

const playAnimation = () => {
  console.log("Animation will play")
  setIsAnimationPlaying(true);
};

const onAnimationFinish = () => {
  console.log("Animation finished")
  setIsAnimationPlaying(false);
};

    return (
     <View style={{flex:1}}>
          <View style={{padding: 10, backgroundColor: '#fff'}}>
      <Text
        style={{fontFamily: 'Poppins-SemiBold', fontSize: 22, color: '#000'}}>
        Order Information
      </Text>
      <Text
        style={{fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000'}}>
        Delivery to
      </Text>

      <View
        style={{
          borderRadius: 5,
          borderColor: '#ccc',
          borderWidth: 1,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 100, height: 100, marginRight: 10}}
          source={{
            uri: 'https://img.freepik.com/premium-vector/folded-location-map-with-marker-city-map-with-pin-pointer_349999-746.jpg?w=2000',
          }}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon
              style={{marginTop: 5}}
              color="grey"
              icon={faAddressCard}
            />
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: '#000',
                width: 180,
                marginLeft: 10,
              }}>
              Köprübaşı Mah. No:1 Serdivan/Sakarya
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon
              style={{marginTop: 5}}
              color="grey"
              icon={faUser}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#000',
                width: 180,
                marginLeft: 10,
              }}>
              Alperen Oruç
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon
              style={{marginTop: 5}}
              color="grey"
              icon={faPhone}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: '#000',
                width: 180,
                marginLeft: 10,
              }}>
              +90 505 102 45 61
            </Text>
          </View>
        </View>
      </View>
    </View>
            <ScrollView>
              {copiedCart.map((x, i) => (
                <Item key={i} item={x} navigation={navigation} />
              ))}
              <View style={{height: 80}}></View>
            </ScrollView>
  
            <TouchableOpacity
        style={{
          backgroundColor: "#9551E8",
          padding: 15,
          width: 200,
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 50,
          marginBottom: 20,
          bottom: 0,
          position: "absolute",
        }}
        onPress={playAnimation}
      >
        <Text style={{ color: "#fff", fontFamily: "Poppins-Regular" }}>
          Pay
        </Text>
      </TouchableOpacity>

      {isAnimationPlaying && (
        <LottieView
          source={require("../../../assets/Error.json")}
          autoPlay
          onAnimationFinish={onAnimationFinish}
        />
      )}
     </View>
    );
  };
  const Item=({item: {product, quantity}, navigation})=>{
   return(
    

    <ScrollView style={{flex: 1}}>

    <View
      style={{
        backgroundColor: '#eee',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000'}}>
        Delivery Time
      </Text>
      <Text style={{fontFamily: 'Poppins-Regular', color: '#000'}}>
      {currentTimeString}
      </Text>
      <Text style={{fontFamily: 'Poppins-Regular', color: '#000'}}>
      {todayString}
      </Text>
    </View>

  
    <View style={{backgroundColor: '#fff', padding: 10}}>
      <View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 5, marginRight: 10}}
            source={{
              uri: product.Image[0],
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
                color: '#000',
              }}>
              {product.Name}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {product.Price}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 14,
            color: '#000',
          }}>
          Subtotal ({quantity})
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
          }}>
          $2.0
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 14,
            color: '#000',
          }}>
          Shipping Fee
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
          }}>
          $2.0
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 14,
            color: '#000',
          }}>
          Total
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 14,
          }}>
          ${quantity*product.Price}
        </Text>
      </View>
    </View>
  </ScrollView>
   );
  }
  
  export default Order;
