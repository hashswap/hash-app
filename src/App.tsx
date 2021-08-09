import React from 'react';
//import logo from './brand.svg';
//import './App.css';
//import Header from './components/Header/Header';
import Login from './components/Login/Login';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Login}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
