import React, { Component } from 'react'

import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateTransaction from './components/transactions/CreateTransaction';
import TransactionDetails from './components/transactions/TransactionDetails';
import Buy from './components/buy/Buy'

const App = () => {
  
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/> 
          <Switch>
            <Route exact path='/' component={ Dashboard }/>
            <Route path='/transaction/:id' component={TransactionDetails} />
            <Route path='/signin' component={ SignIn } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/createtransaction' component={CreateTransaction} />
            <Route path='/buy' component={Buy}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
}

export default App;