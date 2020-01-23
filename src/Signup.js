import React, { Component } from 'react'

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            mobile: ""
        }
    }



    onChangeHanlder = (event) => {
        var newName = event.target.name;
        var newValue = event.target.value;


        var checkValue = true;
        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var namePattern = /^([a-z\d\.]){2,}$/;
        var mobilePattern = /^\d{11}$/;
        var newName = event.target.name;
        var newValue = event.target.value;
        switch (newName) {
            case "fname":
                if (!namePattern.test(newValue)) checkValue = false;
                break;

            case "lname":
                if (!namePattern.test(newValue)) checkValue = false;
                break;

            case "email":
                if (!emailPattern.test(newValue)) checkValue = false;
                break;

            case "mobile":
                if (!mobilePattern.test(newValue)) checkValue = false;
                break;
        }
        if (!checkValue) {
            this.setState({ [newName]: newValue });
        }
        else {
            this.setState({ [newName]: "Invalid Value" });
        }

    }

    render() {
        return (
            <div>
                <form>
                    <h3>First Name: {this.state.fname}</h3>
                    <h3>Last Name: {this.state.lname}</h3>
                    <h3>Email: {this.state.email}</h3>
                    <h3>Mobile: {this.state.mobile}</h3>

                    <br></br><br></br>
                    <input type="text" onChange={this.onChangeHanlder} name="fname" placeholder="First name"></input><br></br>
                    <input type="text" onChange={this.onChangeHanlder} name="lname" placeholder="Last name"></input><br></br>
                    <input type="text" onChange={this.onChangeHanlder} name="email" placeholder="Email"></input><br></br>
                    <input type="text" onChange={this.onChangeHanlder} name="mobile" placeholder="Mobile number"></input><br></br>
                    <input type="submit" name="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
