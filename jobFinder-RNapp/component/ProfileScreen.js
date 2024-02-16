import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Input, Button, Card } from "@rneui/themed";

import backgroundImg from "../assets/background-main.jpg";

export default function ProfileScreen() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [askingSalary, setAskingSalary] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <Text
        style={{
          paddingVertical: 10,
          fontSize: 21,
          textAlign: "center",
          fontWeight: "bold",
          color: "rgba(51, 51, 51, 1)",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
        }}
      >
        Profile
      </Text>

      <View style={styles.container}>
        {/* <Text style={styles.headerText}>My Job Profile</Text> */}
        <View style={styles.content}>
          <View style={styles.underline}></View>
          <View style={styles.imageContainer}>
            <Image
              source={
                image
                  ? { uri: image }
                  : require("../assets/profile-picture.png")
              }
              style={styles.profileImage}
            />
          </View>
          <Button
            title="Select your Profile photo"
            onPress={pickImage}
            style={styles.pickImageButton}
            titleStyle={{
              fontWeight: 600,
              color: "rgba(51, 51, 51, 0.75)",
            }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.50)",
              borderRadius: 10,
              borderWidth: 1.5,
              paddingHorizontal: 15,
              borderColor: "rgba(51, 51, 51, 0.50)",
              // borderStyle: "dashed",
            }}
          />
        </View>
        <Card containerStyle={styles.card}>
          <Input
            placeholder="Name"
            onChangeText={setName}
            value={name}
            inputStyle={styles.input}
            placeholderTextColor="rgba(51, 51, 51, 0.50)"
          />
          <Input
            placeholder="Job Title"
            onChangeText={setJobTitle}
            value={jobTitle}
            inputStyle={styles.input}
            placeholderTextColor="rgba(51, 51, 51, 0.50)"
          />
          <Input
            placeholder="Job Experience"
            onChangeText={setJobExperience}
            value={jobExperience}
            inputStyle={styles.input}
            placeholderTextColor="rgba(51, 51, 51, 0.50)"
          />
          <Input
            placeholder="Asking Salary"
            onChangeText={setAskingSalary}
            value={askingSalary}
            inputStyle={styles.input}
            placeholderTextColor="rgba(51, 51, 51, 0.50)"
          />
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  // headerText: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginTop: 20,
  // },
  content: {
    alignItems: "center",
  },
  underline: {
    width: "50%", // Set width to full screen
    height: 1,
    backgroundColor: "#333333",
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  pickImageButton: {
    marginTop: 20,
    // borderWidth: 0,
    // borderRadius: 10,
    // borderColor: "#333333",
  },
  card: {
    marginTop: 20,
    width: "80%",
    marginBottom: 20, // Added marginBottom to give space below the card
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  input: {
    fontSize: 16,
    color: "rgba(51, 51, 51, 0.75)",
  },
  background: {
    flex: 1,
    width: "100%",
    // alignItems: "center",
    justifyContent: "center",
  },
});
