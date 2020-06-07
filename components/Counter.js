import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import CustomButton from './CustomButton'

class Counter extends React.Component {

    render() {
        return <View style={styles.container}>
            <GestureRecognizer onSwipe={this.props.componentProps.handleSwipe}>
                <CustomButton
                    text={`Beans: ${this.props.componentProps.beans}`}
                    textStyle={styles.beans} buttonStyle={styles.swipeButton}
                    handlePressIn={this.props.componentProps.handlePressIn}
                    handlePressOut={this.props.componentProps.handlePressOut}
                />
            </GestureRecognizer>
            {/* <Text style={styles.beans}>Beans: {this.props.componentProps.beans}</Text> */}
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
        textAlign: 'center',
        color: 'green',
    },
    swipeButton: {
        marginTop: 15,
        backgroundColor: 'black',
        marginBottom: 30,
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