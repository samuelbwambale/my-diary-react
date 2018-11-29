import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './components/routes/Index';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import './assets/App.css';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <div>
          <ToastContainer />
          <Routes />
        </div>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
