import React from 'react';
import { StyleSheet, View, useColorScheme, } from 'react-native';
import { Image } from 'expo-image';
import { height } from '../constants/constants';
import Ionicons from '@expo/vector-icons/Ionicons';


import { Colors } from '../constants/Colors';

const blurhash =
      '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const AppBar = () => {
      const themeStyle = useColorScheme() === "dark" ? styles.dark : styles.light
      const iconColors = useColorScheme() === "dark" ? Colors.dark.icon : Colors.light.icon

      return (
            <View style={[styles.appBar, themeStyle]}>
                  <Image source={require('../../assets/images/MoveOn.png')}
                        style={styles.image}
                        // placeholder={{ blurhash }}
                        contentFit='scale-down'
                        transition={1000}
                  // resizeMode='contain'
                  />
                  <View style={styles.appBarIcons}>
                        <Ionicons name='menu' size={26} color={iconColors} />
                        <Ionicons name='notifications' size={26} color={iconColors} />
                        <Ionicons name='search' size={26} color={iconColors} />
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      appBar:
      {
            width: '100%',
            height: height / 12.5,

            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',

            borderColor: Colors.light.tabIconSelected,
            borderBottomWidth: 1

            // elevation: 1,
            // zIndex: 1
            // borderWidth: 1,
      },
      appBarIcons: {
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: '5%',
            gap: 20
      },
      image: {
            // flex: 1,
            width: '30%',
            height: '100%',
            // borderWidth: 2
      },
      light: {
            backgroundColor: Colors.light.background
      },
      dark: {
            backgroundColor: Colors.dark.background
      }
})

export default AppBar;
