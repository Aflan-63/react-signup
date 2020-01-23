import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ReactDOMTest extends Component {
    changeDom()
    {
        var container = document.getElementById("reactID1");
        var element = <h1> HAHAH I AM CHANGED </h1>
        var callBack = function(){
            alert("I am callback!");
        }

        ReactDOM.render(element,container,callBack);
    }
    render() {
        return (
            <div>
                <button onClick={this.changeDom}>Click me to change DOM</button>
                <h1 id="reactID1"> This is the text to be changed</h1>
            </div>
        )
    }
}
