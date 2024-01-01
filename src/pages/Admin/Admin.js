import React,{useState,useEffect} from "react";
import { View,Text,Button,FlatList } from "react-native";
import styles from "./Admin.styles"
import { collection,getDocs } from "@firebase/firestore";
import { db } from "../../database/firebase";
import AdminProduct from "../../components/AdminProduct";
import CreateButton from "../../components/CreateButton";



const Admin=({navigation})=>{

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'Product'));
      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productsData);
    };

    fetchData();
  }, []);


const handleRemoveProduct = (productId) => {
  // Silindiğinde state'i güncelle
  setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
};


const renderProduct=({item})=>
    <AdminProduct products={item} onRemove={handleRemoveProduct} navigation={navigation}></AdminProduct>

const handleCreateProduct= () => {
    navigation.navigate("CreateScreen");
  };    

    return(
      <View>
      <CreateButton onSelect={handleCreateProduct}></CreateButton>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
    </View>
    );
}

export default Admin