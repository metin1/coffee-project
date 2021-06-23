import React from 'react'
import { Route, Switch } from 'react-router-dom'
// Standart Routes'
// import Alert from '../layout/alert'

import NotFound from '../layout/notFound/NotFound'
import About from '../About/AboutPage'

const Routes = () => (
  <section>
    {/* <Alert /> */}
    <Switch>
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </section>
)

export default Routes
