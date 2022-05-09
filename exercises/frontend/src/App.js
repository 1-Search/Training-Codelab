import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
