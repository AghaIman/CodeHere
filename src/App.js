import React from "react";
import logo from "./logo.svg";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Editor from "./components/Editor";
import Output from "./components/Output";
import Contests from "./components/Contests";
import {Button, Modal} from 'react-bootstrap'
import {Modall} from "./components/Modall" 

function App() {
  return (
    <div>
      {/* <Editor /> */}
    {/* <Contests></Contests> */}
    <Modall></Modall>
    {/* <h1> Bootstrap Modal in React</h1> */}
  
    </div>
  );
}

export default App;
