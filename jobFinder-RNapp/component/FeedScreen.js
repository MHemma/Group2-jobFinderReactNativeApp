import { StyleSheet, Text, View } from 'react-native';


export default function FeedScreen() {
    return(
        <View style = {styles.container}>
            <Text>Feed Screen</Text>
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
});