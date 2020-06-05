import React from 'react'


const Screen = props => {
    return React.cloneElement(props.component, { componentProps: props.componentProps})
}

export default Screen