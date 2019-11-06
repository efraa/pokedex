import { PokedexService } from '../../services'
import { LAST_POKEMONS_LOADED } from '../types'

// List of pokemons
export const listPokemons = (userId, {
  page,
  perPage,
}) => async dispatch => {
  try {
    const list = await PokedexService.list(userId, {
      page,
      perPage
    })
    if (list.data)
      dispatch({
        type: LAST_POKEMONS_LOADED,
        lastPokemons: list.data.data.pokemons,
      })
  } catch (err) {
    console.log(err)
  }
}
