import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ReactDOMTest2 extends Component {
    buttonClicked(){
        var container = document.getElementById("img");
        
        ReactDOM.findDOMNode(container).src="https://pbs.twimg.com/media/DUUCOZiUMAILTos.jpg";
        
        console.log(ReactDOM.findDOMNode(container));
    }
    render() {
        return (
            <div>
                <button onClick={this.buttonClicked}>Click to change</button>
                <img id="img" src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"></img>
            </div>
        )
    }
}
