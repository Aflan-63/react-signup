import React, { Component } from 'react'

export default class Nominee extends Component {


    constructor() {
        super();
        this.state = {
            name: "",
            percentage: 0,
            sum: 0,
            nameArray:[],
            percentageArray:[]

        }
    }
    onChangeState = (event) => {
        var newName = event.target.name;
        var newValue = event.target.value;
        if(newName === "percentage") this.state.sum = this.state.sum + parseInt(newValue, 10);;
        var value = this.state.sum;
         this.setState({sum:value});
        this.setState({ [newName]: newValue });
        if (this.state.sum <= 100) {
            this.setState({ [newName]: newValue });
        }
        else {
            alert("Exceeds 100%");
            event.target.value = 0;
            newValue = event.target.value;
            this.setState({ [newName]: newValue });
        }
        
    }

    onSubmitClick = () => {
        console.log(this.state.sum)
        if (this.state.sum === 100) {
            alert("Success")
        }
        else if (this.state.sum < 100) {
            alert("Please make sure it's 100");
        }
        else {
            alert("Failure, because it exceeds 100");
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitClick}>
                    <input onChange={this.onChangeState} type="text" name="name" placeholder="Nominee Name"></input><br></br>
                    <input onChange={this.onChangeState} type="text" name="percentage" placeholder="Nominee percentage"></input><br></br>
                    <button name="submit">Add</button>
                    <h1>{this.state.name}</h1><br></br>
                    <h1>{this.state.percentage}</h1><br></br>
                </form>
            </div>
        )
    }
}
