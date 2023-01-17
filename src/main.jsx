import React from 'react'
import { createRoot } from 'react-dom/client'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// components
import Header from './components/Header'

import Routes from './routes'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Routes />
  </>
)
