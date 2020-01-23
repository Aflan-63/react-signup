import React, { Component } from 'react'

export class State extends Component {

    constructor(){
        super();
        this.state = {
            message: "Hello",
            message2: "olleH"
        }
    }

    changeState(arg)
    {
        this.setState ({message: arg});
        this.setState({message2: "Look we changed! Woot"})
    }
    render() {
        return (
            <div>
                <h1>{this.props.sate}</h1>
                <h1>{this.state.message}</h1> <h1>{this.state.message2} <h1>{this.state.sltate}</h1></h1>
                <button onClick={this.changeState.bind(this,"Aflan")}>Click me to change state</button>
            </div>
        )
    }
}

export default State
