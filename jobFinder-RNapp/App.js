import { StyleSheet, Text, View } from 'react-native';
import { Button} from '@rneui/themed';
import { NavigationContainer , useNavigation} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useCallback, useState} from 'react';


import Home from './component/Home';
import ProfileScreen from './component/ProfileScreen';
import JobScreen from './component/JobScreen';
import SettingScreen from './component/SettingScreen';
import FeedScreen from './component/FeedScreen';
import LoginScreen from './component/LoginScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function DrawerContent(){
  return(
    <Drawer.Navigator>
    <Drawer.Screen name = "Home" component = {Home} ></Drawer.Screen>
    <Drawer.Screen name = "Feed" component = {FeedScreen} ></Drawer.Screen>
    <Drawer.Screen name = "Settings" component = {SettingScreen}></Drawer.Screen>
    </Drawer.Navigator>

);
}

function HomeTabs({navigation}){

  // using useCallback to ensure that the function reference remains stable across renders, optimizing performance
  // [navigation]: This dependency array in useCallback ensures that the navigation object is memoized, and the function will only be recreated if the navigation object changes.
  const handleHomePress = useCallback(() => {
    // Your logic when the Home tab is pressed
    navigation.navigate('Home');
  }, [navigation]);


  return(
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon:({focused,color,size}) => {
        let iconName;
        if(route.name === "Login"){
          iconName = focused? 'log-in':'log-in-outline'
        }
        if (route.name === "Home ") {
          iconName = focused? 'home':'home-outline'
        }
        if (route.name === "Profile") {
          iconName = focused? 'person':'person-outline'
        }
        if (route.name === "Jobs") {
          iconName = focused? 'search':'search-outline'
        }
        return <Ionicons name = {iconName} size ={size} color = {color}></Ionicons>
      }

    })
  }
    >
      <Tab.Screen name="Login" component = {LoginScreen} options={{ headerShown: false}} 
        // initialParams={{}}
      ></Tab.Screen>
      <Tab.Screen name="Home " component = {DrawerContent} options={{ headerShown: false}}  listeners={{ tabPress: handleHomePress }}></Tab.Screen>
      <Tab.Screen name = "Profile" component={ProfileScreen} options={{ headerShown: false}} 
        // initialParams={{ userId}}
      ></Tab.Screen>
      <Tab.Screen name = "Jobs" component={JobScreen} options={{ headerShown: false }} ></Tab.Screen>
    </Tab.Navigator>
  );
}



export default function App() {
 
return (

  <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen
        name = "HomeTabs"
        component = {HomeTabs}
        options={{ headerShown: false}}
      ></Stack.Screen>  
    </Stack.Navigator>


  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
