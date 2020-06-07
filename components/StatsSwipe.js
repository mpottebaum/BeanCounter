import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { withRouter } from 'react-router-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import CustomButton from './CustomButton'

const StatsSwipe = withRouter(props => {
    const handleSwipeRight = () => {
        props.history.push('/stats')
    }

    return <GestureRecognizer
        onSwipeRight={handleSwipeRight}
        style={styles.container}
    >
        <CustomButton text={'Stats'} buttonStyle={styles.button} handlePressIn={props.handlePressIn} handlePressOut={props.handlePressOut}/>
    </GestureRecognizer>
})

export default StatsSwipe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        // flexDirection: 'row',
        // alignItems: 'center',
        left: 0,
        bottom: 0
    },
    button: {
        marginTop: 10
    },
    help: {
        backgroundColor: '#d6d6d6',
        color: 'gray',
        padding: 5
    }
})