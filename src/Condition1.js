import React, { Component } from 'react'

export class Condition1 extends Component {
    constructor() {
        super();
        this.state = {
            login: true,
            status: "true",
            message: "StateChange"
        }
    }

    logOut(a)
    {
        this.setState({login:a});
    }
    Login(a)
    {
        this.setState({login:a});
    }
    // buttonClick(arg) {
    //     this.setState({ login: arg });
    // }
    render() {
        // if (this.state.login === true) {
        //     return (
        //         <button onClick={this.buttonClick(this, false)}>LOGOUT BUTTON</button>
        //     );
        // }
        // else {
        //     return (<button onClick={this.buttonClick(this, true)}>LOGIN BUTTON</button>);
        // }
        return (this.state.login?<div> <button onClick={this.logOut.bind(this,false)}>LOGOUT</button> <h1>{this.state.message}</h1></div>:<div> <h1>{this.state.message}</h1><button onClick={this.Login.bind(this,true)}> LOGIN</button></div>)
    }
}

export default Condition1
