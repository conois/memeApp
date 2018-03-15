import React, { Component } from 'react';
import './App.css';

//Components
import BoxContainer from './containers/box-container';
import Titulo from './components/Title/';


class App extends Component {
  render() {
    return (
      <div>
        <Titulo /> 
        <BoxContainer />
      </div>
    );
  }
}

export default App;
