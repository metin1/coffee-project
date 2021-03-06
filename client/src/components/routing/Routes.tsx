import React from 'react'
import {
  Route, Switch,
} from 'react-router-dom'

import About from '../About/AboutPage'
import Landing from '../Landing/LandingPage'
import NotFound from '../layout/notFound/NotFound'
import CoffeePage from '../Coffee/CoffeePage'

const Routes = () => (
  <section>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/about' component={About} />
      <Route exact path='/coffees' component={CoffeePage} />
      <Route component={NotFound} />
    </Switch>
  </section>
)

export default Routes
