import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from './../../api-calls/api-calls';

class PokemonCard extends Component{

  displayPokemon = async (pokemon) => {
    const selectedPokemon = pokemon.map( async (pokeId) => {
      const pokeData = await fetchPokemon(pokeId);
      console.log(pokeData)
      return pokeData
    })
  }

  displayPokemonTypes = () => {
    const displayType = this.props.types.map(type => {
      return (
        <div onClick={() => this.displayPokemon(type.pokemon)}>{type.name}</div>
      )
    })
    return displayType
  }

  render() {
    return (
      <div>
        {this.displayPokemonTypes()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  types: state.types
})

export default connect(mapStateToProps)(PokemonCard)