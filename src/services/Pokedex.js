import { get } from './api'

export const PokedexService = {
  list: async (userId, {
    page,
    perPage
  }) => await get(`${userId}/pokedex?page=${page}&perPage=${perPage}`),
}
