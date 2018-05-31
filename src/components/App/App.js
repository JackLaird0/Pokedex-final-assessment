import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { fetchPokemonTypes } from './../../api-calls/api-calls'

class App extends Component {

componentDidMount() {
  fetchPokemonTypes().then( data => console.log(data))
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
