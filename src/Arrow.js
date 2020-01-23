import React from 'react'

// function Arrow() {
//     return (
//         <div>
//             <button>My Button</button>
//         </div>
//     )
// }
const AlertMe =(a)=>{
    alert(a);

}

const Arrow = () => {
    return (<button onClick={AlertMe.bind(this,'I am from Arrow function')}>My Button</button>);
}

export default Arrow
