import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Message = props => {
    return <Text style={styles.message}>{props.message}</Text>
}

export default Message

const styles = StyleSheet.create({
    message: {
        flex: 1
    }
})