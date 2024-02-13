import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button} from '@rneui/themed';
import { NavigationContainer , useNavigation} from "@react-navigation/native";
import React, { useEffect, useState,} from "react";

export default function LoginScreen() {
    const [userId, setUserId] = useState (null);
    const [userIdInput, setUserIdInput] = useState(null);
    const [userPasswordInput, setUserPasswordInput] = useState(null);
    const [userLoggedin, setUserLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');

    const userLoginInfo= {
        id:"User1",
        password: "Test"
    }

    const navigation = useNavigation();
    const handleLogin = () => {
        // check if user has even input ID and password first, then check if ID and password are valid
        if (userIdInput && userPasswordInput && userIdInput === userLoginInfo.id && userPasswordInput === userLoginInfo.password) {
            // navigation.navigate("Home ");
            setUserLoggedIn(true);
            setUserId(userIdInput);
            navigation.navigate('Home ', {userIdInput});
        } else {
            setUserLoggedIn(false);
            setLoginError("Invalid credentials. Please try again")

        }
    }

    return(
        <View style ={styles.container}>
            <Text>Login Screen</Text>

            <View style={styles.box}>        
                <Text style={{flex:1, textAlign: 'right'}}>ID:</Text>
                <View style={{flex:4}} >
                    <TextInput
                    style = {styles.input}
                    value ={userIdInput}
                    onChangeText={setUserIdInput}
                    ></TextInput>
                </View>
            </View>

            <View style={styles.box}>        
                <Text style={{flex:1, textAlign: 'right'}}>Password:</Text>
                <View style={{flex:4}} >
                    <TextInput
                    style = {styles.input}
                    value ={userPasswordInput}
                    onChangeText={setUserPasswordInput}
                    secureTextEntry={true}
                    ></TextInput>
                </View>
            
            </View>

            <Button title = "Login" buttonStyle = {{backgroundColor: '#696969'}} onPress={(handleLogin)}></Button>

            <Text style={styles.errorText}>{loginError}</Text>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6FA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
        // flex: 1,
        flexDirection: "row",
        marginTop:10,
        alignItems: 'center',
    },
    input: {
        height: 30,
        width: 100,
        margin: 12,
        borderWidth: 1,
        paddingLeft:10
    },
    errorText:{
        color: 'red', // Set your desired color
        marginTop: 30,
        fontSize:20,
    },
});