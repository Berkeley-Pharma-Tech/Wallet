import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/> 
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/signin' component={SignIn}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;