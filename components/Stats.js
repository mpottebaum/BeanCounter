import React from 'react'
import { StyleSheet, Text, View} from 'react-native';



const Stats = props => {
    return <View>
        <Text>Highest Count: {props.componentProps.highestCount}</Text>
        <Text>Current Beans: {props.componentProps.beans}</Text>
    </View>
}

export default Stats