import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import { fetchPokemonTypes } from './../../api-calls/api-calls';
import { connect } from 'react-redux';
import { addPokemonType } from './../../actions/index';
import PokemonCard from './../../containers/PokemonCard/index'

class App extends Component {

componentDidMount() {
  fetchPokemonTypes().then( data => this.props.addPokemonType(data))
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
        <PokemonCard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPokemonType: (types) => dispatch(addPokemonType(types))
})


export default connect(null, mapDispatchToProps)(App);
