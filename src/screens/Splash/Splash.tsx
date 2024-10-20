import React, { useEffect } from 'react';
// import { Image } from 'expo-image';
import { Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { router, type Href } from 'expo-router';

import SplashStyle from './Splash.style';
import { BackgroundComponent } from '@/src/components/Background';
// import { i18nLanguage, Change_Language } from '@/src/locales/i18n';

// Change_Language('ar')

// SplashScreen.preventAutoHideAsync();

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function SplashScreenLocal() {
  const styles = SplashStyle();

  useEffect(() => {

    navigateToHome()
    return () => {

    };
  }, []);

  async function navigateToHome() {
    console.log('navigate-Now')
    await new Promise(resolve => setTimeout(resolve, 3000));
    router.replace('/home')
  }

  return (
    <BackgroundComponent>
      <Image source={require('../../../assets/images/MoveOnCenter.png')}
        style={styles.image}
        // placeholder={{ blurhash }}
        // contentFit="contain"
        // transition={1000}
        resizeMode='contain'
      />


    </BackgroundComponent>
  );
};
