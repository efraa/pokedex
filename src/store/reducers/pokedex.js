import { LAST_POKEMONS_LOADED } from '../types'

const initialState = {
  lastPokemons: [],
  loading: true,
}

export const pokedex = (state = initialState, action) => {
  switch (action.type) {
    case LAST_POKEMONS_LOADED:
      return {
        ...state,
        lastPokemons: action.lastPokemons,
        loading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
