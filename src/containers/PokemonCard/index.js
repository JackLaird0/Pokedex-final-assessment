import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from './../../api-calls/api-calls';
import { displayPokemon, findPokemonType } from './../../api-calls/api-calls';
import { addPokemon, selectedType } from './../../actions/index';
import './pokemonCard.css'

class PokemonCard extends Component{

  handleClick = async (pokemonType, type) => {
    const fetchPokemon = await displayPokemon(pokemonType);
    this.props.addPokemon(fetchPokemon);
    console.log(this.props)
    this.props.selectType(type);
  }

  displaySelectedPokemon = (type) => {
    const pokeInfo = this.props.pokemon.map((poke) => {
      return (
        <div>
          <p>Name: {poke.name}</p>
          <p>Type: {type}</p>
          <p>Weight: {poke.weight}</p>
          <img src={poke.sprites.front_shiny} alt={poke.name}/>
        </div>
      )
    })
    return pokeInfo
  }

  displayPokemonTypes = () => {
    const displayType = this.props.types.map(type => {
      if (this.props.selectedType === type.name) {
        return (
          <div className='type-label selected' onClick={() => this.handleClick(type.pokemon, '')}>
            {type.name}
            {this.displaySelectedPokemon(type.name)}
          </div>
        )
      } else {
        return (
          <div className='type-label' onClick={() => this.handleClick(type.pokemon, type.name)}>
            {type.name}
          </div>
        )
      }
    })
    return displayType
  }

  render() {
    return (
      <div className='pokemon-card-container'>
        {this.displayPokemonTypes()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  types: state.types,
  pokemon: state.pokemon,
  selectedType: state.selectedType
})

const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon)),
  selectType: (type) => dispatch(selectedType(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard)