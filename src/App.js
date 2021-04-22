import React from 'react'
import { Router } from '@reach/router'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import SiteStatus from './pages/SiteStatus'

const App = () => (
  <Router>
    <Home path="/" />
	<Login path="login"/>
    <Dashboard path="dashboard" />
    <SiteStatus default />
  </Router>
)

export default App
