import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeekTable from './components/WeekTable'
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onRequestUsers()
  }

  parseDay = (timestamp = null) => {
    return new Date(timestamp * 1000).getDay()
  }

  findDay = (users = []) => {
    const sunData = [], monData = [], tueData = [], wedData = [], thuData = [], friData = [], satData = []
    for (let user of users) {
      let rawDate = user.birthday.raw
      if (this.parseDay(rawDate) === 0) sunData.push(user)
      if (this.parseDay(rawDate) === 1) monData.push(user)
      if (this.parseDay(rawDate) === 2) tueData.push(user)
      if (this.parseDay(rawDate) === 3) wedData.push(user)
      if (this.parseDay(rawDate) === 4) thuData.push(user)
      if (this.parseDay(rawDate) === 5) friData.push(user)
      if (this.parseDay(rawDate) === 6) satData.push(user)
    }
    const sun = Object.assign({}, { group_name: "sunday", data: sunData }),
      mon = Object.assign({}, { group_name: "monday", data: monData }),
      tue = Object.assign({}, { group_name: "tuesday", data: tueData }),
      wed = Object.assign({}, { group_name: "wednesday", data: wedData }),
      thu = Object.assign({}, { group_name: "thursday", data: thuData }),
      fri = Object.assign({}, { group_name: "friday", data: friData }),
      sat = Object.assign({}, { group_name: "saturday", data: satData }),
      objUsers = [{ ...sun }, { ...mon }, { ...tue }, { ...wed }, { ...thu }, { ...fri }, { ...sat }]
    return objUsers
  }

  render() {
    const { fetching, users, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">(React) Manipulate Data Demo by Aekkawan</h1>
        </header>
        {
          fetching === true ? <p className="App-intro">loading.....</p> : null
        }
        {
          users ? <WeekTable data={this.findDay(this.props.users)} /> : null
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
