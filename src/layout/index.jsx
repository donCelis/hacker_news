import '../styles/components/_tabs.scss'

import Tabs from '../components/Tabs'
import { ContextProvider } from '../context'

const Layout = ({ children }) => (
  <ContextProvider>
    <main className='App'>
      <Tabs />
      {children}
    </main>
  </ContextProvider>
)

export default Layout
