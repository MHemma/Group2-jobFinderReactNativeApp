import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import backgroundImg from "../assets/background-main.jpg";
import linkedOutLogo from "../assets/linkedout-logo.png";

export default function Home() {
  const navigation = useNavigation();
  const goToJobScreen = () => {
    navigation.navigate("Jobs");
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Image source={linkedOutLogo} style={styles.mainLogo} />
        {/* <Text style={{ fontSize: 30 }}>LinkedOut</Text> */}

        <Button
          title="Take me to Jobs"
          titleStyle={{
            color: "rgba(51, 51, 51, 0.75)",
            fontWeight: 600,
          }}
          buttonStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.50)",
            borderColor: "rgba(51, 51, 51, 0.50)",
            borderWidth: 1.5,
            borderRadius: 15,
            marginTop: 10,
            paddingHorizontal: 20,
          }}
          onPress={goToJobScreen}
        ></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainLogo: {
    width: 200,
    height: 160,
  },
});
