import React from 'react'
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Routes from './components/routing/Routes'

import './App.css'

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <div className='main'>
              <Route component={Routes} />
            </div>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App
