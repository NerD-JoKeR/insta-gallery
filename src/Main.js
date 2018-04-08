import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PhotosContainer from './PhotosContainer';
import Login from './LoginComponent';
import App from './App'

const Main = () => (
  <main>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/photos' component={PhotosContainer}/>
    </Switch>
  </main>
)

export default Main;