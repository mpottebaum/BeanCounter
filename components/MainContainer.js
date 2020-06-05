import React from 'react'
import { StyleSheet, View } from 'react-native';
import { NativeRouter as Router, Route } from "react-router-native"
import Screen from './Screen'
import Counter from './Counter'
import Stats from './Stats'
import StatsSwipe from './StatsSwipe'
import HomeSwipe from './HomeSwipe'


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beans: 0
        }
    }

    handlePress = () => {
        this.setState(prevState => {
            const chance = Math.ceil(Math.random() * 10)
            const dropped = Math.ceil(Math.random() * prevState.beans)
            const newBean = chance === 10 ? (prevState.beans - dropped) : (prevState.beans + 1)
            return {
                beans: newBean
            }
        })
    }

    counterProps = () => {
        return {
            beans: this.state.beans,
            handlePress: this.handlePress
        }
    }



    render() {
        return <Router>
                    <View style={styles.container}>
                        <Route exact path='/'>
                            <StatsSwipe />
                            <Screen component={<Counter />} componentProps={this.counterProps()} />
                        </Route>
                        <Route path='/stats'>
                            <HomeSwipe />
                            <Screen component={<Stats />} />
                        </Route>
                    </View>
                </Router>
    }
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


//   const preventNegative = num => {
//       return num < 0 ? 0 : num
//   }