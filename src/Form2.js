import React, { Component } from 'react'

export default class Form2 extends Component {

    constructor()
    {
        super();
        this.state = {
            username: ""
        }
    }
    // onChangeHandle(event)
    // {
    //     var newName = event.target.value;
    //     this.setState({name:newName})
    // }
    onChangeHandle =(event)=>{
        var newName = event.target.name;
        var newValue = event.target.value;
        this.setState({[newName]:newValue});
       
    }

    onSubmitClick=()=>{
        // var newName = event.target.name;
        // var newValue = event.target.value;
        // this.setState({[newName]:newValue});
        alert(this.state.username);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitClick}>
                    <h1>Form 2</h1>
                    <h1>{this.state.username}</h1>
                    <input name="username" onChange={this.onChangeHandle} type="text" placeholder="Your name"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
