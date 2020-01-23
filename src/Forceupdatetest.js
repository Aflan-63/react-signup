import React, { Component } from 'react'

export class Forceupdatetest extends Component {
    constructor(){
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    forceUpdateHandler(){
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler}>Force Update</button>
        <h1>Random Number = {Math.random()}</h1>               
            </div>
        )
    }
}

export default Forceupdatetest
