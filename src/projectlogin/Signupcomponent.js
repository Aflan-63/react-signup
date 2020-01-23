import React, { Component } from 'react'
import { MDBInput, Button } from "mdbreact";
import ReactDOM from 'react-dom';

export default class Signupcomponent extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            fname: "",
            lname: "",
            password: "",
            rpassword: "",
            usernameStatus: "false",
            userPassStatus: "false"

        }
    }

    validateOnChange(newName, newValue) {
        var namePattern = /^([a-zA-Z]){2,30}$/;
        var emailPattern = /\s+@\s+\.\s+/;
        var statusCode = false;
        //console.log("Statuscode: "+statusCode);
        switch (newName) {
            case "username":
                statusCode = namePattern.test(newValue) ? (true) : (false);
                //console.log("Statuscode in Username: "+statusCode);
                return statusCode;
            case "fname":
                statusCode = namePattern.test(newValue) ? (true) : (false);
                //console.log("Statuscode in Username: "+statusCode);
                return statusCode;
            case "lname":
                statusCode = namePattern.test(newValue) ? (true) : (false);
                //console.log("Statuscode in Username: "+statusCode);
                return statusCode;
            case "email":
                statusCode = emailPattern.test(newValue) ? (true) : (false);
                //console.log("Statuscode in Username: "+statusCode);
                return statusCode;
            case "password":
                return statusCode;
            case "rpassword":
                var password = this.state.password;
                if (password === newValue) statusCode = true;
                else statusCode = false;
                return statusCode;
            default:
                return statusCode;
        }
    }
    validateSubmit() {
        var namePattern = /^([a-zA-Z]){2,30}$/;
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var statusCode = false;
        //console.log(event.target.name.username.value);

        var username = this.state.username;
        var fname = this.state.fname;
        var lname = this.state.lname;
        var email = this.state.email;
        var password = this.state.password;
        var rpassword = this.state.rpassword;
        if (namePattern.test(username) && namePattern.test(fname) && namePattern.test(lname)
            && emailPattern.test(email) && (password === rpassword)) {
            statusCode = true;
        }
        return statusCode;


    }

    onSignInChecker = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        if (name === "username") {
            if (value === this.state.username) this.state.usernameStatus = true;
            else this.state.usernameStatus = false;
        }
        if (name === "password") {
            if (value === this.state.password) this.state.userPassStatus = true;
            else this.state.userPassStatus = true;
            console.log("Name: " + name + " value: " + value);
        }

        if (this.state.userPassStatus === true && this.state.usernameStatus === false) {
            //alert("Sign in Successful");
            console.log("Inside Login");
            console.log("Name: " + name + " value: " + value);
            // var buttonID = document.getElementById("btn-signin");
            // findDOMNode(buttonID).disabled = {disabled:false};
        }

        console.log("UsernameStatus: " + this.state.userPassStatus + " PasswordStatus: " + this.state.userPassStatus);
    }



    onSignInHandler = () => {
        console.log("UsernameStatus: " + this.state.userPassStatus + " PasswordStatus: " + this.state.userPassStatus);
        if (this.state.userPassStatus === true && this.state.usernameStatus === true) {
            alert("Sign in successful!");
            ReactDOM.render(<h1>Congratulation Success</h1>,document.getElementById("root"))
        }
        else {
            alert("Failure");
        }
    }

    onSubmitHandler = () => {
        // var namePattern = /^([a-zA-Z]){2,30}$/;
        // var emailPattern = /\s+@\s+\.\s+/;
        //var status = true;
        // if (namePattern.test(event.target.name.username.value) && namePattern.test(event.target.name.fname.value) && namePattern.test(event.target.name.lname.value)
        //     && emailPattern.test(event.target.name.email.value) && (event.target.name.password.value === event.target.name.password.value)) {
        //     status = true;
        // }
        // else status = false;
        //console.log(this.state.username);


        var status = this.validateSubmit();
        if (status === true) {
            
            var element = <div style={{ padding: 50, margin: 20 }}><form onSubmit={this.onSignInHandler}><MDBInput label="Username" type="text" name="username" onChange={this.onSignInChecker} placeholder="Enter your username"></MDBInput>
                <MDBInput label="Password" type="password" name="password" onChange={this.onSignInChecker} placeholder="Enter your password again"></MDBInput>
                <h1>User Name: {this.state.username} and User Password: {this.state.password}</h1>
                <Button id="btn-signin" color="deep-orange" type="submit" name="submit" value="Submit Information">Sign In</Button></form></div>;
            var container = document.getElementById("root");
            ReactDOM.render(element, container);


        }
        else {
            alert("Invalid!");
        }
    }

    onChangeHandler = (event) => {
        var newName = event.target.name;
        var newValue = event.target.value;
        var status = this.validateOnChange(newName, newValue, event);
        if (status === false) console.log("Incorrect format");
        else console.log(newValue);

        this.setState({ [newName]: newValue });
        //console.log(newName + " " + newValue);
    }

    render() {
        return (
            <div>
                <div id="container" style={{ padding: 50, margin: 20 }}>
                    <form onSubmit={this.onSubmitHandler}>
                        <h1 id="h1">Sign up form</h1>
                        <br></br>
                        <h3>Input your details, if verified you will proceed to the next page, Automatically!</h3>
                        <MDBInput label="Username" type="text" name="username" onChange={this.onChangeHandler} placeholder="Enter your username"></MDBInput>
                        <MDBInput label="First Name" type="text" name="fname" onChange={this.onChangeHandler} placeholder="Enter your first name" ></MDBInput>
                        <MDBInput label="Last Name" type="text" name="lname" onChange={this.onChangeHandler} placeholder="Enter your last name"></MDBInput>
                        <MDBInput label="Email" type="email" name="email" onChange={this.onChangeHandler} placeholder="Enter your last name"></MDBInput>
                        <MDBInput label="Password" type="password" name="password" onChange={this.onChangeHandler} placeholder="Enter your password"></MDBInput>
                        <MDBInput label="Re-type Password" type="password" name="rpassword" onChange={this.onChangeHandler} placeholder="Enter your password again"></MDBInput>
                        <Button color="deep-orange" type="submit" name="submit" value="Submit Information">Sign up</Button>

                    </form>
                </div>
                <div id="logina"></div>
            </div>
        )
    }

}