import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Subtitle } from '../../components/Subtitle'
import { LastPokemon } from '../../components/LastPokemon'

// Actions
import { listPokemons } from '../../store/actions'

const LastPokemonsContainer = ({
  listPokemons,
  user,
  page,
  perPage,
  pokemons,
}) => {
  useEffect(() => {
    listPokemons(user.id, {
      page,
      perPage,
    })
  }, [listPokemons, page, perPage, user])

  return pokemons && (
    <div className="last-pokemons">
      <Subtitle text="Last pokémons added." />

      <div className="last-pokemons__cards">
        {pokemons.map(pokemon =>
          <LastPokemon 
            key={pokemon.id} 
            user={user} 
            pokemon={pokemon}   
          />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  pokemons: state.pokedex.lastPokemons,
})

export default connect(
  mapStateToProps,
  { listPokemons }
)(LastPokemonsContainer)
