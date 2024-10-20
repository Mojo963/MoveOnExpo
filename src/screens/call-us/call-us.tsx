import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { BackgroundComponent } from '@/src/components/Background';
import CallUsStyle from './call-us.style';

const CallUs = () => {
      const styles = CallUsStyle()
      return (
            <BackgroundComponent>
                  <Text> call - us  </Text>
            </BackgroundComponent>
      );
}


export default CallUs;
