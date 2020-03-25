import React from 'react';
import logo from './logo.svg';
import './App.css';

import Example from './components/Example';
import New from './components/New';
import { Input } from 'reactstrap';
import Slide from './components/Slide';
import ListMenu from './components/ListMenu';
import ListCard from './components/ListCard';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Example />
          <New />
          <Slide />
          <div className="body-center">
            <ListMenu />
            <ListCard />
          </div>
          
        </div>
      );
}}

export default App;
