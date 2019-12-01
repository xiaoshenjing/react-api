import React from 'react'
import 'antd/dist/antd.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store';
import App from './App'
import Login from './Login'
import NotFound from './NotFound'

export default () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/app' />} />
                <Route path='/app' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/404' component={NotFound} />
            </Switch>
        </Router>
    </Provider>
)
