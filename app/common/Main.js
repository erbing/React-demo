import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import style from '../assets/less/index.less'

const Home = (props) => (
    <div>
        this is home pages
    </div>
)

const Roster = (props) => (
    <div>
        this is index pages
        <li> <Link to={'/msg/123'}> msg </Link></li>
    </div>
)

const Schedule = (props) => (
    <div>
        this is my pages
    </div>
)

const Number = (props) => (
    <div>
        this is Number pages and this is my prama id : {props.match.params.id}
    </div>
)


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/index' component={Roster}/>
      <Route path='/my' component={Schedule}/>
        <Route path='/msg/:id' component={Number}/>
    </Switch>
  </main>
)

export default Main