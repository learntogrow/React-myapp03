
import React, {Component,  useState, useEffect } from 'react';
// import './common01.css' ;

// class TwoWayBinding extends Component{
//     constructor(props) {
//         super(props);
//         this.state = { valuedisplay: '' };
//         this.clickhandle=this.clickhandle.bind(this);
//         this.textbox = React.createRef();
//     }

//     clickhandle(event){
//         this.setState({
//             valuedisplay: this.textbox.current.value
//         });
//     }

//     render(){

//         return (
//             <aside>
//                 <h2>Two Way Binding</h2>
//                 <input type="data"  ref={this.textbox} onChange={this.clickhandle}  /> <br/><br/>
//                 <div>{this.state.valuedisplay}</div>
//                 <img src='https://bit.ly/2YE7rRY' width='300' alt='sweets' />
//             </aside>
//             );
//     }
// }
function TwoWayBinding() {
    const [textbox, setTextBox] = useState();

    return (
            <aside>
                <h2>Two Way Binding</h2>
                <input type="data"  onChange={(e) => setTextBox(e.target.value)} /> <br/><br/>
                <div>{textbox}</div>
                <img src='https://bit.ly/2YE7rRY' width='300' alt='sweets' />
            </aside>
        );
}

export default TwoWayBinding ;

// check later
// function MyInput17Hoc() {
//     const [name, setName] = useState();
//     const handleChange = e => setName(e.target.value);

//     return (
//         <div>
//             <input onChange={handleChange} value={name} placeholder="Enter your name (HOC)" /> <br/>
//             <p>Data entered: {name}</p> 
//         </div>
//     )
// }
//  export default MyInput17Hoc;
