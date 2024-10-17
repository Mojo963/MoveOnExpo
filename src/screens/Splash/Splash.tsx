import React from 'react';
// import { Image } from 'expo-image';
import { Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import SplashStyle from './Splash.style';
import { BackgroundComponent } from '@/src/components/Background';

SplashScreen.preventAutoHideAsync();

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function SplashScreenLocal() {
  const styles = SplashStyle();
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
