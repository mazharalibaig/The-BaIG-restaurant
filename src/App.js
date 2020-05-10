import React,{Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      
      <BrowserRouter>
        <div className="boss">
          <Main />
        </div>
      </BrowserRouter>

    );
  }
}
