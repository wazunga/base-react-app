import React from 'react'
import { Router } from '@reach/router'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import SiteStatus from './pages/SiteStatus'

const App = () => (
  <Router>
    <Home path="/" />
    <Dashboard path="dashboard/*" />
    <SiteStatus default />
  </Router>
)

export default App
