import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Badge = props => {
    return <Text style={styles.badge}>{props.badge}</Text>
}

export default Badge

const styles = StyleSheet.create({
    badge: {
        marginBottom: 100
    }
})

