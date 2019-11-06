import React from 'react'
import { Link } from 'react-router-dom'
import { PrivatePage } from '../../containers/PrivatePage'
import { Header } from '../../components/Header'
import { LastPokemons } from '../../containers/LastPokemons'

const HomePage = () => {
  return (
    <PrivatePage>
      <Header />
      <LastPokemons page={1} perPage={4} />
      <div className="mb-5 d-flex justify-content-center align-items-center">
        <Link to="/pokedex" className="button button--secoundary">
          View all pokemons
        </Link>
      </div>
    </PrivatePage>
  )
}

export default HomePage
