import React,{useState,useEffect} from "react";
import { View,Text,ScrollView,TextInput,Pressable,TouchableOpacity,BackHandler} from "react-native";

import ProductGrid from "../../components/Product/ProductGrid";
import ProductSlider from "../../components/Product/ProductSlider";
import ProductCarousel from "../../components/Product/ProductCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dashboard.styles"



const Dashboard=({navigation})=>{
    const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searched, setSearched] = useState(false);

  const handleBackButtonClick = () => {
    setSearching(false);
    setSearchText('');
    setSearched(false);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

    return(
        <View>
        <View style={styles.searchBar}>
          <TextInput
            value={searchText}
            onChangeText={e => setSearchText(e)}
            style={searching ? styles.searchInputFocused : styles.searchInput}
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
            selectionColor="#000"
          />
          <TouchableOpacity
            onPress={() => searchText.length > 0 && setSearched(true)}
            style={styles.searchBtn}>
            <FontAwesomeIcon
              style={{color: '#000', marginRight: 10}}
              icon={faSearch}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{paddingTop: 70}}>
          {/* <Header heading="" navigation={navigation} /> */}
  
          {searched ? (
            <>
              <ProductGrid navigation={navigation} searchText={searchText} />
            </>
          ) : (
            <>
              <Text style={styles.heading}>Explore</Text>
              {/* <Categories /> */}
              <ProductCarousel navigation={navigation} />
              <Text style={styles.heading}>Popular Products</Text>
              <ProductSlider navigation={navigation} />
              <Text style={styles.heading}>Top Picks For You</Text>
              <ProductSlider navigation={navigation} />
              <View style={{height: 100}}></View>
            </>
          )}
        </ScrollView>
      </View>
    );
}

export default Dashboard;