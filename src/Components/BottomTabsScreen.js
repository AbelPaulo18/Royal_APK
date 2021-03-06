import React, {useState} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Color from '../Assets/ColorPallet';

import Home from '../Screen/Home/Home';
import Series from '../Screen/Series/Series';
import Animes from '../Screen/Animes/Animes';
import Downloads from '../Screen/Downloads/Download';
import Filmes from '../Screen/Filmes/Filmes';
import MovieD from '../Screen/MovieDetails/MovieDetail';
import Episodes from '../Screen/Episodes/Episodes';

import PlayIcon from '../Assets/Icons/play.png';
import SerieIcon from '../Assets/Icons/film-reel.png';
import DownloadsIcon from '../Assets/Icons/cloud-download.png';
import AnimeIcon from '../Assets/Icons/anime-berserk.png';
import HomeIcon from '../Assets/Icons/Home-filled.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FilmD() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Filmes">
        <Stack.Screen
          name="Filmes"
          component={Filmes}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MovieD"
          component={MovieD}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SeriesD() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Series">
        <Stack.Screen
          name="Series"
          component={Series}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MovieD"
          component={MovieD}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Episodes"
          component={Episodes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AnimesD() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Animes">
        <Stack.Screen
          name="Animes"
          component={Animes}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MovieD"
          component={MovieD}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeD() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MovieD"
          component={MovieD}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = () => {
  const navigation = useNavigation();
  const [home, setHome] = useState(false);
  return (
    <Tab.Navigator
      initialRouteName="HomeD"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: 55,
          borderColor: Color.tabColor,
          backgroundColor: Color.tabColor,
          ...styles.shadow,
        },
      }}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Film"
        component={FilmD}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabPart}>
              <Image
                source={PlayIcon}
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                  fontWeight: '500',
                  fontSize: 10,
                }}>
                Filmes
              </Text>
            </View>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="S??ries"
        component={SeriesD}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabPart}>
              <Image
                source={SerieIcon}
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                  fontWeight: '500',
                  fontSize: 10,
                }}>
                S??ries
              </Text>
            </View>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="HomeD"
        component={HomeD}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeD');
                setHome(!home);
              }}>
              <View style={styles.tabPart}>
                <Image
                  source={HomeIcon}
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: focused
                      ? `${Color.tabActive}`
                      : `${Color.tabInactive}`,
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? `${Color.tabActive}`
                      : `${Color.tabInactive}`,
                    fontWeight: '500',
                    fontSize: 10,
                  }}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="AnimeD"
        component={AnimesD}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabPart}>
              <Image
                source={AnimeIcon}
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                  fontWeight: '500',
                  fontSize: 10,
                }}>
                Anime
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabPart}>
              <Image
                source={DownloadsIcon}
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                }}
              />
              <Text
                style={{
                  color: focused
                    ? `${Color.tabActive}`
                    : `${Color.tabInactive}`,
                  fontWeight: '500',
                  fontSize: 10,
                }}>
                Download
              </Text>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  tabPart: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 1,
  },
});
