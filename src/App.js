import React from 'react';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Login from './component/Login'
import UserDashboard from './component/Dashboard'
import { connect } from 'react-redux'
import _ from 'lodash'
import { removeUser } from './action/user'
import ShowPost from './component/Post' 

function App(props) {
  const handleLogout = () => {
    console.log('logout')
    props.dispatch(removeUser())
    localStorage.removeItem('auth')
  }  
  return (
    <div className="container">
      <h1>Welcome to social dashboard</h1>
      <BrowserRouter>
        { 
          !_.isEmpty(props.user) ? <Link to="/login" onClick={() => {
            handleLogout(props)
          }}>logout</Link>
          : <Link  to="/login">Login</Link>
        }

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/post/:id" component={ShowPost} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
