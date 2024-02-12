import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator} from '@react-navigation/drawer';
import FeedScreen from "./FeedScreen";
import SettingScreen from "./SettingScreen";
import Home from "./Home";


const Drawer = createDrawerNavigator();

export default function DrawerContent() {

    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Feed' component={FeedScreen} />
                <Drawer.Screen name='Settings' component={SettingScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}