import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text,Image,View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import {   
  faUser as faUserEmpty,
  faHeart as faHeartEmpty, } from '@fortawesome/free-regular-svg-icons';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites"
import Product from "./pages/Product"
import Login from "./pages/Login"
import SignUp from './pages/SignUp';
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"

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
    <Stack.Navigator options={{headerShown:false}}>
      <Stack.Screen name='LoginScreen' component={Login} options={{headerShown:false}} >
        </Stack.Screen >
        <Stack.Screen name='SignUpScreen' component={SignUp} options={{headerShown:false}} >
        </Stack.Screen >
        <Stack.Screen name='DashboardScreen' component={Dashboard} options={{headerShown:false}} >
        </Stack.Screen >
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
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: '#000',
                  fontSize: 10,
                }}>
                Home
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <>
                {focused ? (
                  <FontAwesomeIcon icon={faHome} />
                ) : (
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../assets/icons/home.png')}
                  />
                )}
              </>
            ),
          }}></Tab.Screen>
        <Tab.Screen name='Favorites' component={FavoritesStack} options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: '#000',
                  fontSize: 10,
                }}>
                Favorites
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon icon={focused ? faHeart : faHeartEmpty} />
            ),
          }}></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileStack} options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: '#000',
                  fontSize: 10,
                }}>
                Profile
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon icon={focused ? faUser : faUserEmpty} />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


