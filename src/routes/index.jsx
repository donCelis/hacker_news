import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from '../layout'
import Blog from '../pages/Blog'
import Favs from '../pages/Favs'

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default Router
