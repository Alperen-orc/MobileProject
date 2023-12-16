import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();
const Tab=createBottomTabNavigator();

const FavoritesStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='FavoritesScreen' component={Favorites} options={{headerShown:false}}>
        </Stack.Screen>
    </Stack.Navigator>
  );
}

const ProfileStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='ProfileScreen' component={Profile} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  );
}

const HomeStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='ProductScreen' component={Product} options={{headerShown:false}} >
        </Stack.Screen >

        <Stack.Screen name='DetailScreen' component={Detail} options={{headerShown:false}}>
        </Stack.Screen>
    </Stack.Navigator>
  );
}

const App=()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStack} options={{
          title:"Home",
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:"white"},
          headerTintColor:"orange",
        }}></Tab.Screen>
        <Tab.Screen name='Favorites' component={FavoritesStack} options={{
          title:"Favorites",
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:"white"},
          headerTintColor:"orange",
        }}></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileStack} options={{
          title:"Profile",
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:"white"},
          headerTintColor:"orange",
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


