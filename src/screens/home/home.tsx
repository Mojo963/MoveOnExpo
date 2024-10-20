import React from 'react';
import { Text, View } from 'react-native';

import { BackgroundComponent } from '@/src/components/Background';
import HomeStyle from './home.style';

const Home = () => {
      const styles = HomeStyle()
      return (
            <BackgroundComponent>
                  <Text>
                        home
                  </Text>
            </BackgroundComponent>
      );
}


export default Home;
