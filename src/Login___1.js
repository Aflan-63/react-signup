import React from 'react'
import './Login___1.css'
import loginpic from './login.png'

function Login___1() {
    function buttonPressed()
    {
        alert("You have pressed Login");
    }
    return (
        <div>
            <div id="Login___1">
                <div class="Card">
                    <div class="card">
                        <div class="view overlay">
                            <img class="card-img-top" src={loginpic} alt="Card image cap"></img>
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        <rect fill="rgba(255,255,255,1)" id="Card" rx={0} ry={0} x={0} y={0} width={583} height={583}>
                        </rect>
                    </div>
                </div>
                <svg className="Footer">
                    <rect fill="rgba(255,255,255,1)" id="Footer" rx={0} ry={0} x={0} y={0} width={1920} height={167}>
                    </rect>
                </svg>
              

                <div id="Login_Details">
                    <div class="namebox">
                        {/* <svg className="namebox"> */}
                        <div class="md-form">
                            <input type="text" id="username" class="form-control"></input>
                            {/* <label for="form1">Example label</label> */}
                        </div>
                        {/* <rect fill="rgba(255,255,255,1)" id="namebox" rx={0} ry={0} x={0} y={0} width={512} height={64}>
                        </rect> */}
                        {/* </svg> */}
                    </div>
                    <div class="passwordbox">
                        <div class="md-form">
                            <input type="text" id="password" class="form-control"></input>
                            {/* <label className="Password" for="form1">Example label</label> */}
                        </div>
                    </div>
                    {/* <svg className="passwordbox">
                        {/* <rect fill="rgba(255,255,255,1)" id="passwordbox" rx={0} ry={0} x={0} y={0} width={512} height={64}>
                        </rect> */}
                    {/* </svg> */}
                    <div className="btn_login">
                        <button onClick={buttonPressed} id="btn_login" type="button" className="btn btn-danger" rx={0} ry={0} x={0} y={0} width={512} height={64}>Login</button>
                        {/* <rect fill="rgba(255,255,255,1)" id="btn_login" >
                        </rect> */}
                    </div>
                    <div id="NAME">
                        <span>NAME</span>
                    </div>
                    <div id="Password">
                        <span>PASSWORD</span>
                    </div>
                    {/* <div id="login">
                        <span>login</span>

                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Login___1
