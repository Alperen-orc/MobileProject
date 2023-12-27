import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { Text,Image,View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import {   
  faUser as faUserEmpty,
  faHeart as faHeartEmpty, } from '@fortawesome/free-regular-svg-icons';


import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SideMenu from '@chakrahq/react-native-side-menu';
import { observer } from 'mobx-react';
import { AuthStore } from './store/auth';

import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites"
import Product from "./pages/Product"
import Login from "./pages/Login"
import SignUp from './pages/SignUp';
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Category from './pages/Category'; 
import Order from './pages/Order';
import Orders from './pages/Orders';
import Tutorial from './pages/Onboarding';
import Menu from './components/Menu';
import Header from './components/Header';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();
const Tab=createBottomTabNavigator();
const navigationRef=createNavigationContainerRef();

const menu = <Menu navigationRef={navigationRef} />;


const ProfileStack=()=>{
  return(
    <Stack.Navigator options={{headerShown:false}} initialRouteName='Wishlist'>
      <Stack.Screen name='ProfileScreen' component={Profile} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='OrderScreen' component={Order} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='OrdersScreen' component={Orders} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  );
}

const HomeStack=()=>{
  return(
    <Stack.Navigator options={{headerShown:false}} initialRouteName="Dashboard">
        <Stack.Screen name='DashboardScreen' component={Dashboard} options={{headerShown:false}} >
        </Stack.Screen >
      <Stack.Screen name='ProductScreen' component={Product} options={{headerShown:false}} >
        </Stack.Screen >
        <Stack.Screen name='DetailScreen' component={Detail} options={{headerShown:false}}>
        </Stack.Screen>
    </Stack.Navigator>
  );
}

const CartStack=()=>{
  return(
    <Stack.Navigator options={{headerShown:false}} initialRouteName='WishlistScreen'>
      <Stack.Screen name='CartScreen' component={Cart} options={{headerShown:false}} >
        </Stack.Screen >
        <Stack.Screen name='WishlistScreen' component={Wishlist} options={{headerShown:false}} >
        </Stack.Screen >
        <Stack.Screen name='ProductScreen' component={Product} options={{headerShown:false}} >
        </Stack.Screen >
      <Stack.Screen name='CategoryScreen' component={Category} options={{headerShown:false}} >
        </Stack.Screen >
    </Stack.Navigator>
  );
}

const Tabs=(navigation)=>{
  return(
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStack} options={{ headerShown:false,
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
        <Tab.Screen name='Wishlist' component={CartStack} options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text
                style={{
                  color: '#000',
                  fontSize: 10,
                }}>
                Wishlist
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
  );
}

const App = observer(() => {
  const [openMenu, setOpenMenu] = useState(false);

  const {
    state: {isAuthenticated},
  } = AuthStore;

  return (
    <>
      {isAuthenticated ? (
        <>
          <SideMenu menu={menu} isOpen={openMenu} autoClosing={true}>
            <Header setOpenMenu={setOpenMenu} navigationRef={navigationRef} />
            <NavigationContainer ref={navigationRef}>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                initialRouteName="Main">
                <Stack.Screen name="Main" component={Tabs} />
              </Stack.Navigator>
            </NavigationContainer>
          </SideMenu>
        </>
      ) : (
        <>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="OnboardingScreen">
              <Stack.Screen name="OnboardingScreen" component={Tutorial} />
              <Stack.Screen name="SignUpScreen" component={SignUp} />
              <Stack.Screen name="LoginScreen" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )}
    </>
  );
});

export default App;


