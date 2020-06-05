import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { NativeRouter as Router, Route } from "react-router-native"
import Screen from './Screen'
import Counter from './Counter'
import Stats from './Stats'
import StatsSwipe from './StatsSwipe'
import HomeSwipe from './HomeSwipe'
import Badge from './Badge'
import Message from './Message'


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beans: 0,
            highestCount: 0,
            message: 'Count those beans',
            badge: 'Novice',
            streak: 0
        }
    }

    handlePress = () => {
        this.setState(prevState => {
            const chance = Math.ceil(Math.random() * 10)
            const dropped = Math.ceil(Math.random() * prevState.beans)
            const newBean = chance === 10 ? (prevState.beans - dropped) : (prevState.beans + 1)
            const streak = chance === 10 ? 0 : (prevState.streak + 1)
            const highestCount = newBean > prevState.highestCount ? newBean : prevState.highestCount
            const badge = determineBadge(highestCount)
            const message = composeMessage(prevState, chance, newBean, dropped, badge, streak)
            return {
                beans: newBean,
                highestCount: highestCount,
                badge: badge,
                message: message,
                streak: streak
            }
        })
    }

    counterProps = () => {
        return {
            beans: this.state.beans,
            handlePress: this.handlePress
        }
    }

    statsProps = () => {
        return {
            highestCount: this.state.highestCount,
            beans: this.state.beans
        }
    }



    render() {
        return <Router>
                    <View style={styles.container}>
                        <Badge badge={this.state.badge} />
                        <Route exact path='/'>
                            <Message message={this.state.message} />
                            <StatsSwipe />
                            <Screen component={<Counter />} componentProps={this.counterProps()} />
                        </Route>
                        <Route path='/stats'>
                            <HomeSwipe />
                            <Screen component={<Stats />} componentProps={this.statsProps()} />
                        </Route>
                    </View>
                </Router>
    }
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      top: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

  const determineBadge = highest => {
    if(highest >= 100) {
        return 'Destroyer of Worlds'
    } else if(highest >= 70) {
        return 'Bean Master'
    } else if(highest >= 45) {
        return 'Expert'
    } else if(highest >= 25) {
        return 'Professional'
    } else if(highest >= 10) {
        return 'Amateur'
    } else {
        return 'Novice'
    }
}

  const composeMessage = (prevState, chance, newBean, dropped, badge, streak) => {
      if(chance === 10 && prevState.beans !== 0) {
          return dropped === 1 ? `Whoops! You dropped a bean!` : `Oh no! You dropped ${dropped} beans!`
      } else if(prevState.badge !== badge) {
          return 'Great work!'
      } else if(streak > 5) {
        return "Now that's what I call bean counting"
      } else {
          return prevState.message
      }
  }