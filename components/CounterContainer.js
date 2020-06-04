import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class CounterContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            beans: 0
        }
    }

    handlePress = () => {
        this.setState(prevState => {
            const chance = Math.round(Math.random())
            const newBean = chance > 0 ? 1 : -1
            return {
                beans: (prevState.beans + newBean)
            }
        })
    }

    render() {
        return <View style={styles.container}>
                <Text>Beans: {this.state.beans}</Text>
                <TouchableOpacity onPress={this.handlePress}>
                    <Text>Count</Text>
                </TouchableOpacity>
            </View>
    }
}

export default CounterContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });