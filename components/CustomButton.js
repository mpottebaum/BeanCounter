import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CustomButton = props => {
    const buttonStyle = {
      ...styles.buttonStyle,
      ...props.buttonStyle
    }
    const textStyle = {
      ...styles.textStyle,
      ...props.textStyle
    }
    return <TouchableOpacity onPress={props.handlePress} style={buttonStyle}>
        <Text style={textStyle}>{props.text}</Text>
    </TouchableOpacity>
}

export default CustomButton

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center'
    },
    
    buttonStyle: {
      padding: 10,
      backgroundColor: '#202646',
      borderRadius: 5,
      justifyContent: 'center',
      alignContent: 'center'
    }
  });