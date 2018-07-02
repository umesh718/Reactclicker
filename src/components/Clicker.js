import React, { Component } from 'react';  
class Clicker extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
        this.incrementHandler =  this.incrementHandler.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
        this.decreaseHandler = this.decreaseHandler.bind(this);
    }
    incrementHandler(){
        this.setState({count:this.state.count + 1 })
    }
    clearHandler(){
        this.setState({count:0 })
    }
    decreaseHandler(){
        this.setState({count:this.state.count - 1 })
    }


  render() {
    return (
      <div className="clicker">
      <div className="clicker-display">
      {this.state.count}
      </div>
      <div className="clicker-button">
        <button id="addbutton" value="Increase" onClick={this.incrementHandler}>+</button>
        <button id="regresh" value="Clear" onClick={this.clearHandler}>Clear</button>
        <button id="regresh" value="Descrease" onClick={this.decreaseHandler}>-</button>
      </div>
          
      </div>
    );
  }
}

export default Clicker;