import { StyleSheet, Text, View } from 'react-native';
import { Button} from '@rneui/themed';


export default function SettingScreen() {
    return(
        <View style={styles.container}>
            <Button title = "Account" buttonStyle = {styles.button}></Button>
            <Button title = "Notifications" buttonStyle = {styles.button}></Button>
            <Button title = "Appearance" buttonStyle = {styles.button}></Button>
            <Button title = "Help" buttonStyle = {styles.button}></Button>
            <Button title = "About" buttonStyle = {styles.button}></Button>
         </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:50
    },
    button: {
        backgroundColor: '#696969',
        color: 'black',
        borderColor:'#696969', 
        borderWidth:5,
        margin: 10,
        padding: 20
    }});