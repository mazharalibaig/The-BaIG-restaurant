import React,{Component} from 'react';
// eslint-disable-next-line
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';
import './App.css';
import Menu from './components/menucomponent';
import {DISHES} from './shared/dishes';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES
    }
  }
  render() {
    return (
      <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">BaIG RESTAURANT</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}
