import React from 'react'
import ReactDOM from 'react-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// components
import Header from './components/Header'

import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <>
      <Header />
      <Routes />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
