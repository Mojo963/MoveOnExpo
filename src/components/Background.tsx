//import liraries
import React, { type PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme, StatusBar, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { Colors } from '../constants/Colors';




type Props = {
      outSideStyle: ViewStyle;
};

// create a component
export const BackgroundComponent = ({ children, }: React.PropsWithChildren<{}>, { outSideStyle }: Props) => {

      const themeStyle = useColorScheme() === "dark" ? styles.dark : styles.light
      const insets = useSafeAreaInsets();
      return (
            <SafeAreaView style={[styles.container, themeStyle, { paddingTop: insets.top }, outSideStyle]}>
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
            // marginTop: StatusBar.currentHeight,
      },
      light: {
            backgroundColor: Colors.light.background
      },
      dark: {
            backgroundColor: Colors.dark.background
      }
});
