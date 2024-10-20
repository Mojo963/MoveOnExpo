import React from 'react';
import { Text, View } from 'react-native';

import { BackgroundComponent } from '@/src/components/Background';
import FwqStyle from './fwq.style';

const Fwq = () => {
      const styles = FwqStyle()
      return (
            <BackgroundComponent>
                  <Text> fwq </Text>
            </BackgroundComponent>
      );
}


export default Fwq;
