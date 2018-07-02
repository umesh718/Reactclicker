import React, { Component } from 'react'; 
import Header from './components/Header';
import Clicker from './components/Clicker'; 
class App extends Component {
  constructor(){
    super();
    this.state = {
      title:"React clicker App"
    }
  }
  render() {
    return (
      <div className="App">
        <div> 
            <Header title={this.state.title}/>
        </div>
        <div>
            <Clicker/>
         </div>
      </div>
    );
  }
}

export default App;
