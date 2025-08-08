import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  Route, 
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import RestoreScroll from './components/RestoreScroll.tsx'
import Providers from './providers.tsx'
import Success from './routes/auth/github/Success.tsx'
import Layout from './routes/Layout.tsx'
import Vault from './routes/Vault'
import Vaults from './routes/Vaults'

createRoot(document.getElementById('root') ?? document.body).render(
  <StrictMode>
    <Providers>
    <Router>
      <RestoreScroll />
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Vaults />} />
          <Route path="vaults" element={<Vaults />} />
          <Route path="vaults/:chainId/:address" element={<Vault />} />
          <Route path="auth/github/success" element={<Success />} />
          <Route path="eg" element={<Vaults />} />
        </Route>
      </Routes>
    </Router>
    </Providers>
  </StrictMode>
)
