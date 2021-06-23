import React from 'react'
import {
  BrowserRouter as Router, Route, Switch, useLocation,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Routes from './components/routing/Routes'

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <div className='main'>
              <Switch>
                <Route component={Routes} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    </div>
  )
}

export default App
