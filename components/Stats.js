import React from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native';



const Stats = props => {
    const drops = props.componentProps.counts - props.componentProps.wins
    const dropPercentage = () => {
        const percentage = Math.round((drops / props.componentProps.counts) * 10000) / 100
        return percentage ? percentage : 0
    }
    const winPercentage = () => {
        const percentage = Math.round((props.componentProps.wins / props.componentProps.counts) * 10000) / 100
        return percentage ? percentage : 0
    }
    // const swipePercentage = () => {
    //     const percentage = Math.round((props.componentProps.wins / props.componentProps.counts) * 10000) / 100
    // }
    return <View style={styles.container}>
        <ScrollView>
            <Text style={styles.stats}>Current Beans: {props.componentProps.beans}</Text>
            <Text style={styles.stats}>Highest Count: {props.componentProps.highestCount}</Text>
            <Text style={styles.stats}>Current Win Streak: {props.componentProps.currentStreak}</Text>
            <Text style={styles.stats}>Longest Win Streak: {props.componentProps.longestStreak}</Text>
            <Text style={styles.stats}>Drops: {drops}</Text>
            <Text style={styles.stats}>Drop Percentage: {dropPercentage()}%</Text>
            <Text style={styles.stats}>Wins: {props.componentProps.wins}</Text>
            <Text style={styles.stats}>Win Percentage: {winPercentage()}%</Text>
            <Text style={styles.stats}>Bean Swipes: {props.componentProps.gambles}</Text>
        </ScrollView>
    </View>
}

export default Stats

const styles = StyleSheet.create({
    container: {
        flex: 5,
    },
    stats: {
        backgroundColor: '#d6d6d6',
        fontSize: 20,
        padding: 20,
    }
})

