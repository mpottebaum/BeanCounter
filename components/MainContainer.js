import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { NativeRouter as Router, Route } from "react-router-native"
import Screen from './Screen'
import Counter from './Counter'
import Stats from './Stats'
import NavBar from './NavBar'
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
            streak: 0,
            longestStreak: 0,
            wins: 0,
            counts: 0,
            gambles: 0,
            swipeHelp: false
        }
    }

    handlePress = () => {
        this.setState(prevState => {
            const chance = Math.ceil(Math.random() * 15)
            const wins = chance === 15 ? prevState.wins : (prevState.wins + 1)
            const dropped = Math.ceil(Math.random() * prevState.beans)
            const newBean = chance === 15 ? (prevState.beans - dropped) : (prevState.beans + 1)
            const streak = chance === 15 ? 0 : (prevState.streak + 1)
            const longestStreak = streak > prevState.longestStreak ? streak : prevState.longestStreak
            const highestCount = newBean > prevState.highestCount ? newBean : prevState.highestCount
            const badge = determineBadge(highestCount)
            const message = composeMessage(prevState, chance, newBean, dropped, badge, streak)
            return {
                beans: newBean,
                highestCount: highestCount,
                badge: badge,
                message: message,
                streak: streak,
                longestStreak: longestStreak,
                wins: wins,
                counts: (prevState.counts + 1)
            }
        })
    }

    handleBeansPressIn = () => {
        this.setState({
            swipeHelp: true
        })
    }

    handleBeansPressOut = () => {
        this.setState({
            swipeHelp: false
        })
    }

    handleBeanSwipe = () => {
        this.setState(prevState => {
            const chance = Math.ceil(Math.random() * 15)
            const wins = chance === 15 ? prevState.wins : (prevState.wins + 1)
            const beans = Math.ceil(Math.random() * (5 * prevState.beans))
            const newBean = chance === 15 ? (prevState.beans + beans) : (prevState.beans - beans)
            const message = chance === 15 ? `You counted ${beans} beans!` : `You dropped ${beans} beans!`
            const streak = chance === 15 ? (prevState.streak + 1) : 0
            const longestStreak = streak > prevState.longestStreak ? streak : prevState.longestStreak
            const highestCount = newBean > prevState.highestCount ? newBean : prevState.highestCount
            const badge = determineBadge(highestCount)
            return {
                beans: newBean,
                highestCount: highestCount,
                badge: badge,
                message: message,
                streak: streak,
                longestStreak: longestStreak,
                wins: wins,
                gambles: (prevState.gambles + 1)
            }
        })
    }

    counterProps = () => {
        return {
            beans: this.state.beans,
            handlePress: this.handlePress,
            handlePressIn: this.handleBeansPressIn,
            handlePressOut: this.handleBeansPressOut,
            handleSwipe: this.handleBeanSwipe
        }
    }

    statsProps = () => {
        return {
            highestCount: this.state.highestCount,
            beans: this.state.beans,
            currentStreak: this.state.streak,
            longestStreak: this.state.longestStreak,
            wins: this.state.wins,
            counts: this.state.counts,
            gambles: this.state.gambles
        }
    }

    containerStyle = () => {
        return {
            ...styles.container,
            backgroundColor: mainBackground(this.state.badge)
        }
    }



    render() {
        return <Router>
                    <View style={this.containerStyle()}>
                        <Badge badge={this.state.badge} />
                        <Route exact path='/'>
                            <Message message={this.state.message} swipeHelp={this.state.swipeHelp}/>
                            <Screen component={<Counter />} componentProps={this.counterProps()} />
                        </Route>
                        <Route path='/stats'>
                            <Screen component={<Stats />} componentProps={this.statsProps()} />
                        </Route>
                        <NavBar background={mainBackground(this.state.badge)}/>
                    </View>
                </Router>
    }
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });


  const determineBadge = highest => {
    if(highest >= 100) {
        return 'The Chosen Bean'
    } else if(highest >= 90) {
        return 'Laser Bean'
    } else if(highest >= 80) {
        return 'Bean Lord'
    } else if(highest >= 70) {
        return 'Demon Sorcerer'
    } else if(highest >= 60) {
        return 'Dark Wizard'
    } else if(highest >= 50) {
        return 'Destroyer of Worlds'
    } else if(highest >= 40) {
        return 'Bean Master'
    } else if(highest >= 30) {
        return 'Expert'
    } else if(highest >= 20) {
        return 'Professional'
    } else if(highest >= 10) {
        return 'Amateur'
    } else {
        return 'Novice'
    }
}

  const composeMessage = (prevState, chance, newBean, dropped, badge, streak) => {
        if(chance === 15 && prevState.beans !== 0) {
            return dropped === 1 ? `Whoops! You dropped a bean!` : `You dropped ${dropped} beans!`
        } else if(prevState.badge !== badge) {
            return 'That is some next level bean work right there'
        } else if(streak === 55) {
            return "I'm beanin' out right now, yo"
        } else if(streak === 45) {
            return "Kershnifuls...that's a lot of beans!"
        } else if(streak === 35) {
            return 'Whoa, buddy, mind your beans'
        } else if(streak === 25) {
            return 'Careful with all those beans now'
        } else if(streak === 15) {
            return 'Damn fine bean counting'
        } else if(streak === 5) {
            return "There it is...Slow and steady now"
        } else {
            return prevState.message
        }
  }


  const mainBackground = badge => {
    switch(badge) {
        case 'The Chosen Bean':
            return '#ffffff'
        case 'Bean Lord':
            return '#d169c5'
        case 'Laser Bean':
            return '#fabbec'
        case 'Demon Sorcerer':
            return '#000000'
        case 'Dark Wizard':
            return '#8a1c16'
        case 'Destroyer of Worlds':
            return '#f03026'
        case 'Bean Master':
            return '#66ffcc'
        case 'Expert':
            return '#66adff'
        case 'Professional':
            return '#ffde66'
        case 'Amateur':
            return '#9cff66'
        case 'Novice':
            return '#d6d2c7'
        default:
            return '#d6d2c7'

    }
}