import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './Login'
import NotFound from './NotFound'

export default () => (
    <Router>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/login' />} />
            <Route path='/app' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/404' component={NotFound} />
        </Switch>
    </Router>
)
