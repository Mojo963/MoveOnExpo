import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { buttomNavigatorHeight } from '@/src/constants/constants';
import AppBar from '@/src/components/AppBar';
import { i18nLanguage } from '@/src/locales/i18n';
import { Colors } from '@/src/constants/Colors';


export default function TabsLayout() {
      const themeStyle = useColorScheme() === "dark" ? styles.dark : styles.light
      const iconColorsDefalut = useColorScheme() === "dark" ? Colors.dark.tabIconDefault : Colors.light.tabIconDefault
      const iconColorsSelect = useColorScheme() === "dark" ? Colors.dark.tabIconSelected : Colors.light.tabIconSelected
      return (
            <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
                  <AppBar />
                  <Tabs screenOptions={{ tabBarActiveTintColor: iconColorsSelect, tabBarInactiveTintColor: iconColorsDefalut, headerShown: false, tabBarStyle: [{ height: buttomNavigatorHeight, borderColor: Colors.light.tabIconDefault, borderTopWidth: 1 }, themeStyle] }} >
                        <Tabs.Screen
                              name="home"
                              options={{
                                    title: i18nLanguage.t('Home'),
                                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                              }}
                        />
                        <Tabs.Screen
                              name="fwq"
                              options={{
                                    title: i18nLanguage.t('Fwq'),
                                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                              }}
                        />
                        <Tabs.Screen
                              name="call-us"
                              options={{
                                    title: i18nLanguage.t('Call us'),
                                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='phone' color={color} />,
                              }}
                        />
                        <Tabs.Screen
                              name="agents"
                              options={{
                                    title: i18nLanguage.t('Agents'),
                                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='play' color={color} />,
                              }}
                        />
                  </Tabs>
            </SafeAreaView>
      );
}

const styles = StyleSheet.create({
      light: {
            backgroundColor: Colors.light.background
      },
      dark: {
            backgroundColor: Colors.dark.background
      }
});
