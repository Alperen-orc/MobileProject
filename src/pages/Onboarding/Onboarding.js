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
            title: 'Hesap Oluşturun',
            subtitle:
              'Alışverişin Keyfini Çıkarın!',
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
            title: 'Sepete Ekle',
            subtitle:
              'Beğendiğiniz Ürünleri Sepetinize Ekleyin',
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
            title: 'Ödeme',
            subtitle:
              'Rahatlıkla Ödemelerinizi Gerçekleştirin.',
          },
        ]}
      />
    );
  };
  
  export default Tutorial;