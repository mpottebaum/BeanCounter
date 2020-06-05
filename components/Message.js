import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Message = props => {
    return <View style={styles.container}>
        <Text style={styles.message}>{props.message}</Text>
    </View>
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'red',
        padding: 15
    }
})