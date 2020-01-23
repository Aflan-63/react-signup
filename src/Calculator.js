import React, { Component } from 'react'
import './Calculator.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Calculator extends Component {
    render() {
        return (
            <div id="main">
                <div id="Calculator">
                    <button className="buttonSub">
                        <rect fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit={4} shapeRendering="auto" id="buttonSub" rx={0} ry={0} x={0} y={0} width={212} height={212}>
                        </rect>
                    </button>
                    <button className="buttonSum">
                        <rect fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit={4} shapeRendering="auto" id="buttonSum" rx={0} ry={0} x={0} y={0} width={212} height={212}>
                        </rect>
                    </button>
                    <button className="buttonDiv">
                        <rect fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit={4} shapeRendering="auto" id="buttonDiv" rx={0} ry={0} x={0} y={0} width={212} height={212}>
                        </rect>
                    </button>
                    <button className="buttonMul">
                        <rect fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit={4} shapeRendering="auto" id="buttonMul" rx={0} ry={0} x={0} y={0} width={212} height={212}>
                        </rect>
                    </button>
                    <input type="text" placeholder="Enter a number" className="textInput_2">
                        {/* <path fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit={4} shapeRendering="auto" id="textInput_2" d="M 0 0 L 474 0">
                        </path> */}
                    </input>
                    <input type="text" placeholder="Enter a number" className="textInput_1">
                        {/* <path fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit={4} shapeRendering="auto" id="textInput_1" d="M 0 0 L 474 0">
                        </path> */}
                    </input>
                    <h1 className="textOutput">Placeholder</h1>
                    <img className="imageView" src="https://image.freepik.com/free-vector/wide-dna-structure-banner-medical-science_1017-20770.jpg">
                        {/* <rect fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit={4} shapeRendering="auto" id="imageView" rx={0} ry={0} x={0} y={0} width={1920} height={313}>
                        </rect> */}
                    </img>
                </div>

            </div>
        )
    }
}
