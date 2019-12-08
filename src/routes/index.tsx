import React from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import App from "@/views/App"
import Login from "@/views/Login"
import NotFound from "@/views/NotFound"
import { content } from "@/routes/config"

type pageProps = { login: boolean; history: any }
class _PageRoutes extends React.Component<pageProps> {
  render() {
    const { login } = this.props

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app" />} />
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/404" component={NotFound} />
        </Switch>
        {login ? <Redirect to="/app" /> : <Redirect to="/login" />}
      </Router>
    )
  }
}

type contentProps = {}
class _ContentRoutes extends React.Component<contentProps> {
  render() {
    return (
      <Router>
        <Switch>
          {content.map((item: any) => {
            return <Route path={item.key} exact key={item.key} component={item.component} />
          })}
          <Redirect to={content[0].key} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state: any) => ({
  login: state.common.login
})

export const PageRoutes = connect(mapStateToProps, null)(_PageRoutes)
export const ContentRoutes = connect(mapStateToProps, null)(_ContentRoutes)
