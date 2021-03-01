
import React, { Component } from 'react';
import MyCars from './components/MyCars';

import './App.css';

class App extends Component {

  state = {
    titre : 'Mon catalogue voitures'
  }


  changeTitle = (e) =>{
    this.setState({
      titre: "mon nouveau titre"
    })
  }

  changeViaParam = (titre) =>{
    this.setState({
      titre
    })
  }

  changeViaBind = (param) =>{
    this.setState({
      titre: param
    })
  }

  render() {
    return (
      <div className="App">
        <MyCars title = {this.state.titre} /> 
        <button onClick= {this.changeTitle}>Changer le nom en dur</button>
        <button onClick= {() => this.changeViaParam("titre via parametre")}>Changer le nom via para</button>
        <button onClick= {this.changeViaBind.bind(this, 'Titre via bind')}>Changer le nom via para</button>
      </div>
    );
  }
  
}

export default App;
