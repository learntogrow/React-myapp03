

import React, {Component} from 'react';

// import './common01.css' ;


class Lifecycle extends Component {

        constructor(props) {
            super(props);
            console.log("constr -- prop: ",   this.props.name) ;
        }

         render() {
             console.log("render") ;
             return (
                 <aside>
                     <div>For Life cycle details, see the JS console.</div>
                    <div>Props info for this comp: {this.props.name}</div>
                    <img src='https://bit.ly/2AwIZdi' width='300' alt='sweets' />
                 </aside>
             ) 
         }

        componentDidMount() { console.log("componentDidMount: ", this.props.name) ; }
        componentWillUnmount() {console.log("componentWillUnmount_#3:", this.props.name) ; }

    }

    export default Lifecycle ;