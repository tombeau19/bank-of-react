import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'
import axios from 'axios'
import Debits from './components/Debits'

class App extends Component {

  state = {
    user: {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
    },
    debits: [],
    credits: []
  }

  getDebits = () => {
    axios.get("http://localhost:4000/debits")
      .then((response) => {
        const debits = response.data
        this.setState({ debits: debits })
      })
      .catch((error) => {
        console.error("Error: ", error)
      })
  }

  getCredits = () => {
    axios.get("http://localhost:4000/credits")
      .then((response) => {
        const credits = response.data
        this.setState({ credits: credits })
      })
      .catch((error) => {
        console.error("Error: ", error)
      })
  }

  componentWillMount() {
    this.getDebits()
    this.getCredits()
  }

  render() {

    const AccountBalanceWrapper = () => {
      return (<AccountBalance accountBalance={this.state.accountBalance} debits={this.state.debits} credits={this.state.credits} />)
    }

    const UserProfileWrapper = () => {
      return (<UserProfile userName={this.state.user.userName} memberSince={this.state.user.memberSince} />)
    }

    const DebitWrapper = () => {
      return (<Debits debits={this.state.debits} />)
    }

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/account' render={AccountBalanceWrapper} />
          <Route exact path='/user' render={UserProfileWrapper} />
          <Route exact path='/debits' render={DebitWrapper} />
        </Switch>
      </Router>
    );
  }
}

export default App;
