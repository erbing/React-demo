import React from 'react'

const Home = (props) => (
    <div>
        this is home pages
    </div>
)

const Roster = (props) => (
    <div>
        this is index pages
    </div>
)

const Schedule = (props) => (
    <div>
        this is my pages
    </div>
)

import { Switch, Route } from 'react-router-dom'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/index' component={Roster}/>
      <Route path='/my' component={Schedule}/>
    </Switch>
  </main>
)

export default Main