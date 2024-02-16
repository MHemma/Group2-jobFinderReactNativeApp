import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";

import backgroundImg from "../assets/background-main.jpg";

export default function SettingScreen() {
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Button
          title="Account"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        ></Button>
        <Button
          title="Notifications"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        ></Button>
        <Button
          title="Appearance"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        ></Button>
        <Button
          title="Help"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        ></Button>
        <Button
          title="About"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        ></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    display: "flex",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    borderColor: "rgba(51, 51, 51, 0.50)",
    borderWidth: 1.5,
    borderRadius: 15,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 50,
    width: "auto",
  },
  buttonText: {
    color: "rgba(51, 51, 51, 0.75)",
    fontWeight: 600,
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
