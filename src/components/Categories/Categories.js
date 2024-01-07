import React,{useState,useEffect} from "react";
import { View,Text,ScrollView,Pressable } from "react-native";

import styles from "./Categories.styles"
import { observer } from "mobx-react";
import { ProductStore } from "../../store/product";

const Categories = observer(() => {
    const {
      state: {categories, category},
      setCategory,
      getCategories,
    } = ProductStore;
  
    useEffect(() => {
      getCategories();
    }, []);
  
    return (
      <ScrollView horizontal={true} style={styles.categoryList}>
        <Pressable style={styles.category} onPress={() => setCategory(null)}>
          <Text
            style={
              category === null
                ? styles.categoryTextSelected
                : styles.categoryText
            }>
            Hepsi
          </Text>
        </Pressable>
        {categories.map((x, i) => (
          <Pressable
            style={styles.category}
            key={i}
            onPress={() => setCategory(x.id)}>
            <Text
              style={
                category && category === x.id
                  ? styles.categoryTextSelected
                  : styles.categoryText
              }>
              {x.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  });
export default Categories;