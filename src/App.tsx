import React from 'react';
//import logo from './brand.svg';
//import './App.css';
//import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Home" component={Welcome}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
