import { Routes, Route, Navigate } from 'react-router-dom'

import Blog from '../pages/Blog'
import Favs from '../pages/Favs'

const Router = () => (
  <Routes>
    <Route path='/' element={<Blog />} />
    <Route path='/favs' element={<Favs />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
)

export default Router
