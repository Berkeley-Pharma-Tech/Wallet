import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
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
        <Navbar/> 
        <div className="container">
          
          <p>Your account: {this.state.account}</p>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;