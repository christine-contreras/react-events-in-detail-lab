// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

    click = (event) => {
        let x = event.clientX
        let y = event.clientY

        return this.props.onReceiveCoordinates([x,y])
    }
    render() {
        return (
            <button onClick={this.click}>Coordinates Button</button>
        )
    }
}

export default CoordinatesButton
