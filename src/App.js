import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GettingStart from './Components/Gettingstart'
import Components from './Components/Components'

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/start/introduction' component = {GettingStart} />
          <Route path = '/start/WhyRB' component = {GettingStart} />
          <Route path = '/start/Terming' component = {GettingStart} />
          <Route path = '/start/Support' component = {GettingStart} />
          <Route path = '/components/alerts' component = {Components} />
          <Route path = '/components/acordion' component = {Components} />
          <Route path = '/components/buttons' component = {Components} />
          <Route path = '/components/forms' component = {Components} />
          <Route path = '/components/jumbotrons' component = {Components} />
          <Route path = '/components/modal' component = {Components} />
          <Route path = '/components/navs' component = {Components} />
          <Route path = '/components/tabs' component = {Components} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
