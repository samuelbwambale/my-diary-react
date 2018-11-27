import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes/Index';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
 export default App;
