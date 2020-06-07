import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { withRouter } from 'react-router-native'
import CustomButton from './CustomButton'

const NavBar = withRouter(props => {
    const pathName = props.history.location.pathname
    const onPress = pathName => {
        // console.log(pathName)
        if(pathName === '/') {
            props.history.push('/stats')
        } else {
            props.history.push('/')
        }
    }
    const buttonText = getButtonText(pathName)
    const buttonStyle = {
        backgroundColor: props.background
    }
    console.log(buttonStyle)
    return <View>
        <CustomButton text={buttonText} handlePress={() => onPress(pathName)} buttonStyle={buttonStyle} textStyle={styles.text}/>
    </View>
})

export default NavBar

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
})

const getButtonText = pathName => {
    return pathName === '/stats' ? 'HOME' : 'STATS'
}