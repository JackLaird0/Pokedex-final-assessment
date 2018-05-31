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

loadingImage = () => {
  if(!this.props.types.length) {
    return (
      <div> 
        <img src="https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif" alt="Pika Running"/>
        <img src="https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif" alt="Pika Running"/>
        <img src="https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif" alt="Pika Running"/>
        <img src="https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif" alt="Pika Running"/>
        <img src="https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif" alt="Pika Running"/>
        <img src="https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif" alt="Pika Running"/>
      </div>
    )
  }
}

  render() {
    return (
      <div className='main'>
        <div className='App'>
          <h1 className='header'> POKéDEX </h1>
        </div>
        {this.loadingImage()}
        <PokemonCard />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  types: state.types
})

const mapDispatchToProps = (dispatch) => ({
  addPokemonType: (types) => dispatch(addPokemonType(types))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
