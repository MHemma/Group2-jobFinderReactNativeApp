import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function FeedScreen() {
    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.feed}>
                    <Text>UK employers plan smaller pay rises for 2024: survey</Text>
                    <Text style={styles.feed.dateText}>FEB 12, 2024 09:49 AM</Text>
                </View>
                <View style = {styles.feed}>
                    <Text>Australians get right to ignore office calls, emails after hours</Text>
                    <Text style={styles.feed.dateText}>FEB 12, 2024 09:06 AM</Text>
                </View>
                <View style = {styles.feed}>
                    <Text>Singapore’s tripartite guidelines on non-compete clauses to be released in second half of 2024</Text>
                    <Text style={styles.feed.dateText}>FEB 06, 2024 11:29 AM</Text>
                </View>
                <View style = {styles.feed}>
                    <Text>US job growth surges in January; wages rise</Text>
                    <Text style={styles.feed.dateText}>FEB 02, 2024 09:56 PM</Text>
                </View>    
            <Text>Feed Screen</Text>
        </ScrollView> 
        
    );
}

const styles = StyleSheet.create({
    feed:{
        margin: 20,
        backgroundColor: 'white',
        alignItems: 'left',
        justifyContent: 'left',
        dateText: {
            color: 'orange',
            alignItems: 'left'
        }
           } 
});