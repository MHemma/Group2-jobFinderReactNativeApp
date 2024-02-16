import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import backgroundImg from "../assets/background-main.jpg";

export default function FeedScreen() {
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.feed}>
          <Text>UK employers plan smaller pay rises for 2024: survey</Text>
          <Text style={styles.feed.dateText}>FEB 12, 2024 09:49 AM</Text>
        </View>
        <View style={styles.feed}>
          <Text>
            Australians get right to ignore office calls, emails after hours
          </Text>
          <Text style={styles.feed.dateText}>FEB 12, 2024 09:06 AM</Text>
        </View>
        <View style={styles.feed}>
          <Text>
            Singapore’s tripartite guidelines on non-compete clauses to be
            released in second half of 2024
          </Text>
          <Text style={styles.feed.dateText}>FEB 06, 2024 11:29 AM</Text>
        </View>
        <View style={styles.feed}>
          <Text>US job growth surges in January; wages rise</Text>
          <Text style={styles.feed.dateText}>FEB 02, 2024 09:56 PM</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  feed: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    alignItems: "left",
    justifyContent: "left",
    dateText: {
      fontSize: 10,
      marginTop: 10,
      color: "rgba(51, 51, 51, 0.75)",
      alignItems: "left",
    },
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
