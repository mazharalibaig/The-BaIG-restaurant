import React,{Component} from 'react';
// eslint-disable-next-line
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';
import './App.css';
import Menu from './components/menucomponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">BaIG RESTAURANT</NavbarBrand>
            </div>
          </Navbar>
          <Menu />
      </div>
    );
  }
}
