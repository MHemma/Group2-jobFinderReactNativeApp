import { StyleSheet, Text, View} from 'react-native';
import { Button} from '@rneui/themed';
import { NavigationContainer , useNavigation} from "@react-navigation/native";



export default function Home() {
    const navigation = useNavigation();
    const goToJobScreen = () => {
    navigation.navigate("Jobs")
    };

    return(
        <View style ={styles.container}>
            <Text style ={{fontSize:30}}>LinkedOut</Text>
            <Button title = "Take me to Jobs" buttonStyle = {{backgroundColor: '#696969'}} onPress={(goToJobScreen)}></Button>
        </View>
    )};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
    }
      
        }  
);