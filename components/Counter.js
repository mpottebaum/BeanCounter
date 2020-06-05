import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { withRouter } from 'react-router-native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import CustomButton from './CustomButton'

class Counter extends React.Component {

    handleSwipe = (gestureName, gestureState) => {
        console.log(gestureName)
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections
        switch(gestureName) {
            case SWIPE_RIGHT:
                this.props.push('/stats')
        }
    }

    render() {
        return <View>
            <Text style={styles.beans}>Beans: {this.props.componentProps.beans}</Text>
            <CustomButton text={'Count'} handlePress={this.props.componentProps.handlePress} />
        </View>
    }
}

export default Counter

const styles = StyleSheet.create({
    beans: {
        fontSize: 40
    }
})