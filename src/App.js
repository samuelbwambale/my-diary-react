import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes/Index';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import './assets/App.css';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <NavBar />
      <Routes />
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
