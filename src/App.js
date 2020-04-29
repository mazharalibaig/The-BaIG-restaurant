import React,{Component} from 'react';
// eslint-disable-next-line
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';

export default class App extends Component {

  render() {
    return (
      <div>
          <Main/>
      </div>
    );
  }
}
