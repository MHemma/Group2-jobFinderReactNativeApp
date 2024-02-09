import { StyleSheet, Text, View } from 'react-native';
import { Button} from '@rneui/themed';
import { NavigationContainer , useNavigation} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './component/Home';
import ProfileScreen from './component/ProfileScreen';
import JobScreen from './component/JobScreen';
import SettingScreen from './component/SettingScreen';
import FeedScreen from './component/FeedScreen';

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

function HomeTabs(){
  const navigation = useNavigation();
  const goToHomeScreen = () => {
  navigation.navigate("Home")
  }
  return(
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon:({focused,color,size}) => {
        let iconName;
        if (route.name === "Home") {
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
      <Tab.Screen name = "Home" options={{ headerShown: false}}>
      </Tab.Screen>
      <Tab.Screen name = "Profile" component={ProfileScreen} options={{ headerShown: false }} ></Tab.Screen>
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
      options={{ headerShown: false }}
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
