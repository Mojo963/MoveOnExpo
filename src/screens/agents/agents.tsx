import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { BackgroundComponent } from '@/src/components/Background';
import AgentsStyle from './agents.style';

const Agents = () => {
      const styles = AgentsStyle()
      return (
            <BackgroundComponent>
                  <Text> agents </Text>
            </BackgroundComponent>
      );
}


export default Agents;
