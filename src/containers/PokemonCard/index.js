import React, { Component } from 'react';
import { connect } from 'react-redux';

class PokemonCard extends Component{

  displayPokemonTypes = () => {
    const displayType = this.props.types.map(type => {
      return (
        <button>{type.name}</button>
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