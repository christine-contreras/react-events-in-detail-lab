// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
    delayClick = (event) => {
        event.persist()

        //put in function callback so it doesn't fire right away
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return (
            <button onClick={this.delayClick}>Delayed</button>
        )
    }
}

export default DelayedButton
