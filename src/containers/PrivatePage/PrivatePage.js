import React from 'react'

import { OnBoarding } from '../../components/onBoarding'
import { Navegation } from '../../components/Navegation'

export const PrivatePage = ({ children }) => (
  <>
    <OnBoarding />
    <div className="container fade">
      <div className="row no-gutters">
        <div className="col-12 col-lg-4">
          <Navegation />
        </div>
        <div className="col-12 col-lg">
          {children}
        </div>
      </div>
    </div>
  </>
)
