
  
import React, { Component } from 'react';
import './vscroll02.css';

import { loremIpsum  } from "lorem-ipsum";   //  npm install  lorem-ipsum
import { List } from "react-virtualized";   //  npm install  react-virtualized

const rowCount = 800000;   // 800K
const listHeight = 600;
const rowHeight = 60;
const rowWidth = 610;

class Vscroll02 extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        name: 'ajay',
        image: 'https://source.unsplash.com/user/erondu/50x40',
        text: loremIpsum({
          count: 1, 
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8 
        })
      }
    });
  }
  
  renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].id}</div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1 >Virtual Scroll: 100K records</h1>
        </header>
        <div className="list">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow}
            rowCount={this.list.length}
            overscanRowCount={3} />
        </div>
      </div>
    );
  }
}

export default Vscroll02;