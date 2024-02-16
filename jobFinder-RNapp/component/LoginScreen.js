import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "@rneui/themed";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import backgroundImg from "../assets/background-main.jpg";

export default function LoginScreen() {
  // {userId,setUserId, userIdInput,setUserIdInput, userPasswordInput, setUserPasswordInput,userLoggedin, setUserLoggedIn, loginError, setLoginError }
  const [userId, setUserId] = useState(null);
  const [userIdInput, setUserIdInput] = useState(null);
  const [userPasswordInput, setUserPasswordInput] = useState(null);
  const [userLoggedin, setUserLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");

  const userLoginInfo = {
    id: "User1",
    password: "Test",
  };

  const navigation = useNavigation();
  const handleLogin = () => {
    // check if user has even input ID and password first, then check if ID and password are valid
    if (
      userIdInput &&
      userPasswordInput &&
      userIdInput === userLoginInfo.id &&
      userPasswordInput === userLoginInfo.password
    ) {
      // navigation.navigate("Home ");
      setUserLoggedIn(true);
      setUserId(userIdInput);
      navigation.navigate("Home ", { userIdInput });
    } else {
      setUserLoggedIn(false);
      setLoginError("Invalid credentials. Please try again");
    }
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.labelText}>ID:</Text>
          <View style={styles.inputContainers}>
            <TextInput
              style={styles.input}
              value={userIdInput}
              onChangeText={setUserIdInput}
            ></TextInput>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.labelText}>Password:</Text>
          <View style={styles.inputContainers}>
            <TextInput
              style={styles.input}
              value={userPasswordInput}
              onChangeText={setUserPasswordInput}
              secureTextEntry={true}
            ></TextInput>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(51, 51, 51, 0.50)",
            width: "10%",
            alignSelf: "center",
          }}
        ></View>

        <Button
          title="Login"
          titleStyle={{
            color: "rgba(51, 51, 51, 0.75)",
            fontSize: 16,
            fontWeight: 600,
            paddingHorizontal: 20,
          }}
          buttonStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.50)",
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: "rgba(51, 51, 51, 0.50)",
            width: "70%",
            alignSelf: "center",
            marginTop: 20,
          }}
          onPress={handleLogin}
        ></Button>

        <Text style={styles.errorText}>{loginError}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  box: {
    // flex: 1,
    flexDirection: "column",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "70%",
  },
  input: {
    height: 37.5,
    marginTop: 10,
    borderWidth: 1.5,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: "rgba(51, 51, 51, 0.50)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  labelText: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(51, 51, 51, 0.75)",
    alignSelf: "center",
  },
  errorText: {
    color: "red", // Set your desired color
    marginTop: 30,
    fontSize: 20,
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainers: {
    width: "100%",
  },
});
