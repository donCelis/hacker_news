import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// components
import Header from './components/Header'

import Router from './routes'
import Layout from './layout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
)
