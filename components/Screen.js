import React from 'react'
import { withRouter } from 'react-router-native'


const Screen = withRouter(props => {
    return React.cloneElement(props.component, { push: props.history.push, componentProps: props.componentProps})
})

export default Screen