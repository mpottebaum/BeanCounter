import React from 'react'
import { StyleSheet } from 'react-native';
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
        <CustomButton text={'Stats'} />
    </GestureRecognizer>
})

export default StatsSwipe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 0
    }
})