//import liraries
import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

import { Colors } from '../constants/Colors';



// create a component
export const BackgroundComponent = ({ children }: React.PropsWithChildren<{}>) => {

      const themeStyle = useColorScheme() === "dark" ? styles.dark : styles.light

      return (
            <SafeAreaView style={[styles.container, themeStyle]}>
                  {children}
            </SafeAreaView>
      );
};

// define your styles
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      light: {
            backgroundColor: Colors.light.background
      },
      dark: {
            backgroundColor: Colors.dark.background
      }
});
