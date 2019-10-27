import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import * as serviceWorker from './serviceWorker'

// Styles
import 'semantic-ui-css/semantic.min.css'
import './styles/index.scss'

ReactDOM.render(<App />, document.getElementById('app'))
serviceWorker.unregister()
