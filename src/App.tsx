import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar light expand="md">
          <Nav className="mr-auto">
            <NavItem>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/dashboard/">Dashboard</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}
