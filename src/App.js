import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeekTable from './Component/WeekTable'

import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onRequestUsers()
  }

  render() {
    const { fetching, users, error } = this.props;
    users ? console.log(users) : console.log(users)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">(React) Manipulate Data Demo by Aekkawan</h1>
        </header>
        <p className="App-intro"> </p>
        {
          fetching === true ? <div>loading.....</div> : null
        }
        {
          users ? <WeekTable data={this.props.users} /> : null
        }
        {
          error ? <div>error.....</div> : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    users: state.users,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestUsers: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
