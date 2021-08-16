import React, {Component} from 'react';
import { loremIpsum  } from "lorem-ipsum";   //  npm install  lorem-ipsum

import './nscroll01.css' ;


const rowCount = 200000; // finds it very difficult to handle 20K records.

class Nscroll01 extends Component {
  constructor() {
    super();
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        name: 'rahul',
        image: 'https://source.unsplash.com/user/erondu/50x40',
        text: loremIpsum ({
          count: 1, 
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8 
        })
      }
    });
  }


  render() {
    return (
      <div>
        <header >
         
          <h1>Normal Scroll: 5K records</h1>
        </header>
        <div className="list">
          {this.list.map(this.renderRow)}
        </div>
      </div>
    );
  }

  renderRow(item) {
    return (
      <div key={item.id} className="row">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="content">
          <div>{item.id}: </div>
          <div>{item.text}</div>
        </div>
      </div>
    );
  }

}

export default Nscroll01 ;