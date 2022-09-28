import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {GraphQLSVG, GraphQLSVGModified } from './components/GraphQLSVG/GraphQLSVG';
import { GroovySVGModified } from './components/GroovySVG/GroovySVG';
import { FramerSVGModified, FramerSVG} from './components/FramerSVG';
import { ReactSVGModified } from './components/ReactSVG/ReactSVG';
import { CSVGModified } from './components/CSVG';

function App() {

  const [isResizing, setIsResizing] = useState<boolean>(false);

  return (
    <div className="App">
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
        <a href="https://graphql.org/">
          <div style={{margin: "50px"}}>
            <GraphQLSVGModified/>
          </div>
        </a>
        <a href="https://groovy-lang.org/">
          <div style={{margin: "50px"}}>
            <GroovySVGModified/>
          </div>
        </a>
        <a href="https://www.framer.com/motion/">
          <div style={{margin: "50px"}}>
            <FramerSVGModified/>
          </div>
        </a>
        <a href="https://reactjs.org/">
          <div style={{margin: "50px"}}>
            <ReactSVGModified />
          </div>
        </a>
        <a href="https://isocpp.org/"/>
          <div>
            <CSVGModified />
          </div>
        </header>
      </div>
  );
}

export default App;
