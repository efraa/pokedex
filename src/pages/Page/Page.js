import React from 'react'

import { Subtitle } from '../../components/Subtitle'

const Page = ({ title, childrem }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <Subtitle text={title} />
      </div>
      <div className="col-12">{childrem}</div>
    </div>
  </div>
)

export default Page
