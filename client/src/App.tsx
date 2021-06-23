import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Landing from './components/Landing/LandingPage'
import Routes from './components/routing/Routes'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
