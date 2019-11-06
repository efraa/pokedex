import React, { memo } from 'react'
import { Link } from 'react-router-dom'

export const LastPokemon = memo(({
  pokemon,
  user,
}) => (
  <div className="last-pokemons__wrapper">
    <Link
      to={`/${user.id}/pokemon/${pokemon.slug}`}
      className="last-pokemons__card"
    >
      <div
        styles={`background-image: url('${pokemon.picture}');`}
        className="last-pokemons__picture"   
      />

      <h4 className="last-pokemons__name">
        {pokemon.name}
      </h4>
    </Link>
  </div>
))
