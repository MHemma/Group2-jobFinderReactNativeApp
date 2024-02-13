import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  Platform,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const [image, setImage] = useState(null);

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
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.underline}></View>
      <View style={styles.imageContainer}>
        {/* <Image
          source={
            image ? { uri: image } : require("./assets/defaultProfileImage.png")
          }
          style={styles.profileImage}
        /> */}
      </View>
      {/* <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        style={styles.pickImageButton}
      /> */}

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>

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
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  underline: {
    width: "100%", // Set width to full screen
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
});