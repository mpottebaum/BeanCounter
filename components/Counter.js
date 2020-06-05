import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import CustomButton from './CustomButton'

class Counter extends React.Component {

    render() {
        return <View style={styles.container}>
            <Text style={styles.beans}>Beans: {this.props.componentProps.beans}</Text>
            <CustomButton text={'Count'} handlePress={this.props.componentProps.handlePress} />
        </View>
    }
}

export default Counter

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 80
    },
    beans: {
        fontSize: 40
    }
})