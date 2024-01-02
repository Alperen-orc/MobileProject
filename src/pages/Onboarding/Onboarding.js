import React,{useCallback} from "react";
import { View,Text,Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';  

const Tutorial = ({navigation}) => {

  const [fontsLoaded,fontError] = useFonts({
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),

  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

    return (
      <Onboarding
        onSkip={() => navigation.navigate('LoginScreen')}
        onDone={() => navigation.navigate('LoginScreen')}
        pages={[
          {
            backgroundColor: '#fff',
            titleStyles: {
              fontFamily: 'Poppins-SemiBold',
            },
            subTitleStyles: {
              fontFamily: 'Poppins-Regular',
            },
            image: (
              <Image source={require('../../../assets/icons/add_your_info.png')} />
            ),
            title: 'Create an account',
            subtitle:
              'Et adipisicing do enim duis amet id culpa. Commodo adipisicing.',
          },
          {
            backgroundColor: '#fff',
            titleStyles: {
              fontFamily: 'Poppins-SemiBold',
            },
            subTitleStyles: {
              fontFamily: 'Poppins-Regular',
            },
            image: (
              <Image source={require('../../../assets/icons/add_to_cart.png')} />
            ),
            title: 'Add to Cart',
            subtitle:
              'Ipsum officia eu amet Lorem amet pariatur culpa reprehenderit esse irure.',
          },
          {
            backgroundColor: '#fff',
            titleStyles: {
              fontFamily: 'Poppins-SemiBold',
            },
            subTitleStyles: {
              fontFamily: 'Poppins-Regular',
            },
            image: <Image source={require('../../../assets/icons/payment.png')} />,
            title: 'Payment',
            subtitle:
              'Nisi eiusmod officia amet veniam veniam ex laborum duis sit commodo.',
          },
        ]}
      />
    );
  };
  
  export default Tutorial;