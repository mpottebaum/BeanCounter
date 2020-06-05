import React from 'react'
import { StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import CustomButton from './CustomButton'

const HomeSwipe = withRouter(props => {
    const handleSwipeLeft = () => {
        props.history.push('/')
    }

    return <GestureRecognizer
        onSwipeLeft={handleSwipeLeft}
        style={styles.container}
    >
        <CustomButton text={'Home'} />
    </GestureRecognizer>
})

export default HomeSwipe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        right: 0,
        top: 0
    }
})