import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Button } from "@rneui/themed";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useCallback, useState } from "react";

import Home from "./component/Home";
import ProfileScreen from "./component/ProfileScreen";
import JobScreen from "./component/JobScreen";
import SettingScreen from "./component/SettingScreen";
import FeedScreen from "./component/FeedScreen";
import LoginScreen from "./component/LoginScreen";

import backgroundImg from "./assets/background-main.jpg";

// const [userId, setUserId] = useState (null);
// const [userIdInput, setUserIdInput] = useState(null);
// const [userPasswordInput, setUserPasswordInput] = useState(null);
// const [userLoggedin, setUserLoggedIn] = useState(false);
// const [loginError, setLoginError] = useState('');

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Get the screen dimensions
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// Define the percentage of the screen height you want the header to be
const headerHeightPercentage = -0.03; // For example, 10%

// Calculate the header height
const headerHeight = screenHeight * headerHeightPercentage;

function DrawerContent() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
      <Drawer.Screen name="Feed" component={FeedScreen}></Drawer.Screen>
      <Drawer.Screen name="Settings" component={SettingScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

function HomeTabs({ navigation }) {
  // using useCallback to ensure that the function reference remains stable across renders, optimizing performance
  // [navigation]: This dependency array in useCallback ensures that the navigation object is memoized, and the function will only be recreated if the navigation object changes.
  const handleHomePress = useCallback(() => {
    // Your logic when the Home tab is pressed
    // navigation.navigate('Home')
    navigation.navigate("Home ", { screen: "Home" });
  }, [navigation]);

  const numberOfNotificationsForJobs = 3;

  return (
    <Tab.Navigator
      tabBarStyle={{ backgroundColor: "transparent", elevation: 0 }} // Set tab bar background to transparent
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Login") {
            iconName = focused ? "log-in" : "log-in-outline";
          }
          if (route.name === "Home ") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          if (route.name === "Jobs") {
            iconName = focused ? "search" : "search-outline";
          }
          return <Ionicons name={iconName} size={20} color={color}></Ionicons>;
        },
        tabBarBadgeStyle: {
          backgroundColor: "#ff3333",
          color: "white",
          fontSize: 12,
          left: 8,
          top: 0,
        },
        // set text color for active and inactive tab
        // set for all tabs
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
      tabBarOptions={{
        activeTintColor: "#6495ED",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 10,
          fontWeight: "400",
          marginBottom: 8,
        },
        tabStyle: {
          backgroundColor: "transparent",
          marginTop: 8,
        },
        indicatorStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "rgba(51, 51, 51, 1)", // Change the background color of the header
          },
          headerTitle: "",
          // headerTitleStyle: {
          //   color: "rgba(51, 51, 51, 1)", // Change the color of the header title text
          // },
          headerTintColor: "white",
          headerStatusBarHeight: headerHeight,
        }}
        // initialParams={{userId,setUserId, userIdInput,setUserIdInput, userPasswordInput, setUserPasswordInput,userLoggedin, setUserLoggedIn, loginError, setLoginError }}
      ></Tab.Screen>
      <Tab.Screen
        name="Home "
        component={DrawerContent}
        // options={{ headerShown: false }}
        listeners={{ tabPress: handleHomePress }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "rgba(51, 51, 51, 1)", // Change the background color of the header
          },
          headerTitle: "",
          // headerTitleStyle: {
          //   color: "rgba(51, 51, 51, 1)", // Change the color of the header title text
          // },
          headerTintColor: "white",
          headerStatusBarHeight: headerHeight,
        }}
        // initialParams={{ userId}}
      ></Tab.Screen>
      <Tab.Screen
        name="Jobs"
        component={JobScreen}
        options={{
          tabBarBadge: numberOfNotificationsForJobs,
          headerShown: true,
          headerStyle: {
            backgroundColor: "rgba(51, 51, 51, 1)", // Change the background color of the header
          },
          headerTitle: "",
          // headerTitleStyle: {
          //   color: "rgba(51, 51, 51, 1)", // Change the color of the header title text
          // },
          headerTintColor: "white",
          headerStatusBarHeight: headerHeight,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.navigationContainer}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerStyle: { height: 0 } }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
