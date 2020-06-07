import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import CustomButton from './CustomButton'

class Counter extends React.Component {

    render() {
        return <View style={styles.container}>
            <Text style={styles.beans}>Beans: {this.props.componentProps.beans}</Text>
            <CustomButton text={'COUNT'} handlePress={this.props.componentProps.handlePress} buttonStyle={styles.button} textStyle={styles.buttonText} />
        </View>
    }
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 4,
        zIndex: 1
        // position: 'absolute',
        // bottom: 80
    },
    beans: {
        fontSize: 40,
        marginBottom: 30,
        marginTop: 15,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'green',
        padding: 20
    },
    button: {
        height: 110,
        borderColor: 'black',
        borderRadius: 60
    },
    buttonText: {
        fontSize: 50
    }
})