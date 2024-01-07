import React from "react";
import { View,Text,ScrollView,Image,Pressable,TouchableOpacity } from "react-native";

import {ProductStore} from "../../store/product";
import { observer } from "mobx-react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styles from "./Wishlist.styles"



const Wishlist = observer(({navigation}) => {
    const {
      state: {wishlist},
    } = ProductStore;
  
    return (
      <View style={{flex: 1}}>
        {/* <Header heading="Cart" navigation={navigation} /> */}
  
        {wishlist.length > 0 ? (
          <ScrollView>
            {wishlist.map((x, i) => (
              <Item key={i} product={x} navigation={navigation} />
            ))}
          </ScrollView>
        ) : (
          <View style={{justifyContent: 'center', flex: 1}}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginBottom: 20,
              }}
              source={require('../../../assets/icons/out-of-stock.png')}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                fontSize: 26,
                color: '#000',
              }}>
              Favorileriniz Boş
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                fontSize: 12,
                color: '#000',
              }}>
              Kalbe basın ve favorilerinize ekleyin
            </Text>
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => navigation.navigate('DashboardScreen')}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Keşfet
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  });
  
  const Item = ({product, navigation}) => {
    const {removeFromWishlist, addToCart, setProduct} = ProductStore;
  
    return (
      <View style={styles.wishlistItem}>
        <Pressable
          onPress={() => {
            setProduct(product);
            navigation.navigate('ProductScreen');
          }}>
          <Image
            style={{width: 100, height: 150, borderRadius: 5}}
            source={{
              uri: product.Image[0],
            }}
          />
        </Pressable>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.wishlistName}>{product.Name}</Text>
            <Text style={styles.wishlistPrice}>${product.Price}</Text>
          </View>
  
          <TouchableOpacity
            onPress={() => {
              addToCart(product);
              removeFromWishlist(product.id);
            }}
            style={{
              backgroundColor: '#000',
              alignItems: 'center',
              borderRadius: 0,
              padding: 10,
              width: 120,
              alignSelf: 'flex-end',
              marginBottom: 0,
            }}>
            <Text style={{color: '#fff', fontFamily: 'Poppins-Regular'}}>
              Sepete Ekle
            </Text>
          </TouchableOpacity>
        </View>
  
        <Pressable
          onPress={() => removeFromWishlist(product.id)}
          style={{position: 'absolute', right: 0, top: 10}}>
          <FontAwesomeIcon color="red" icon={faTrashCan} />
        </Pressable>
      </View>
    );
  };

  export default Wishlist;