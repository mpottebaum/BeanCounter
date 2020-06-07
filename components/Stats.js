import React from 'react'
import { StyleSheet, Text, View} from 'react-native';



const Stats = props => {
    return <View style={styles.container}>
        <Text style={styles.stats}>Current Beans: {props.componentProps.beans}</Text>
        <Text style={styles.stats}>Current Win Streak: {props.componentProps.currentStreak}</Text>
        <Text style={styles.stats}>Highest Count: {props.componentProps.highestCount}</Text>
        <Text style={styles.stats}>Longest Win Streak: {props.componentProps.longestStreak}</Text>
    </View>
}

export default Stats

const styles = StyleSheet.create({
    container: {
        flex: 3
    },
    stats: {
        backgroundColor: '#d6d6d6',
        fontSize: 20,
        padding: 20
    }
})