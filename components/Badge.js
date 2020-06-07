import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Badge = props => {
    const badgeColor = getBadgeColor(props.badge)

    const badgeStyle = {
        ...styles.badge,
        color: badgeColor
    }
    return <View style={styles.container}>
        <Text style={badgeStyle}>{props.badge}</Text>
    </View>
}

export default Badge

const styles = StyleSheet.create({
    badge: {
        // height: 10,
        fontSize: 50,
        padding: 10
    },
    container: {
        flex: 1,
        marginTop: 100,
        marginBottom: 20
    }
})

const getBadgeColor = badge => {
    if(badge === 'Dark Wizard' || badge === 'Demon Sorcerer') {
        return 'white'
    } else {
        return 'black'
    }
}

// const getBadgeBackground = badge => {
//     switch(badge) {
//         case 'Destroyer of Worlds':
//             return 'red'
//         case 'Bean Master':
//             return 'yellow'
//         case 'Expert':
//             return 'blue'
//         case 'Professional':
//             return 'orange'
//         case 'Amateur':
//             return 'green'
//         case 'Novice':
//             return 'gray'
//         default:
//             return 'gray'

//     }
// }
