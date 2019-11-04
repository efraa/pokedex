import React from 'react'
import { connect } from 'react-redux'

import bg from '../../assets/images/on-boarding-bg.svg'
import pokeImg from '../../assets/images/pokedex.svg'
import { Button } from '../Forms/Button'

// Actions
import { setOnBoarding } from '../../store/actions'

const OnBoarding = ({ loading, user, setOnBoarding }) => {
  const onSubmit = async e => {
    e.preventDefault()
    await setOnBoarding(user.username, {
      onBoarding: false,
    })
  }

  return !loading &&
    user &&
    user.onBoarding ?
    (
      <div className="on-boarding__container fade">
        <div className="on-boarding__main">
          <div 
            className="on-boarding__wrapper"
            style={{ backgroundImage: `url('${bg}')` }}
          >
            <div className="on-boarding">
              <img className="on-boarding__image" src={pokeImg} alt="Pokedex" />

              <div className="on-boarding__content">
                <h3 className="on-boarding__title">
                  Welcome to your Pokedex.
                </h3>

                <p className="on-boarding__text">
                  Start creating your Pokémon's and create the best pokedex.
                </p>

                <Button
                  text="Get Started"
                  type="submit"
                  onClick={e => onSubmit(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : false
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user,
})

export default connect(mapStateToProps, { setOnBoarding })(OnBoarding)
