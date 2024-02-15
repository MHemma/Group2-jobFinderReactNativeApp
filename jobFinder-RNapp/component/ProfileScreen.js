import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Input, Button, Card } from "@rneui/themed";

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
    <View style={styles.container}>
      <Text style={styles.headerText}>My Job Profile</Text>
      <View style={styles.content}>
        <View style={styles.underline}></View>
        <View style={styles.imageContainer}>
          <Image
            source={
              image
                ? { uri: image }
                : require("../assets/defaultProfileImage.png")
            }
            style={styles.profileImage}
          />
        </View>
        <Button
          title="Select your Profile photo"
          onPress={pickImage}
          style={styles.pickImageButton}
        />
      </View>
      <Card containerStyle={styles.card}>
        <Input placeholder="Name" onChangeText={setName} value={name} />
        <Input
          placeholder="Job Title"
          onChangeText={setJobTitle}
          value={jobTitle}
        />
        <Input
          placeholder="Job Experience"
          onChangeText={setJobExperience}
          value={jobExperience}
        />
        <Input
          placeholder="Asking Salary"
          onChangeText={setAskingSalary}
          value={askingSalary}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  content: {
    alignItems: "center",
  },
  underline: {
    width: "50%", // Set width to full screen
    height: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  pickImageButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  card: {
    marginTop: 20,
    width: "80%",
    marginBottom: 20, // Added marginBottom to give space below the card
  },
});
