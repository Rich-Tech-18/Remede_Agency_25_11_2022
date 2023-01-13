import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import User from './components/User/User';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
// import { useState } from 'react';
// import {hasAuthenticated} from './services/authAPI';
// import Auth from './context/Auth';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import { useDispatch } from 'react-redux';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Register />}></Route>
            <Route exact path="/profile" element={<User />}></Route>
            <Route exact path="/*" element={<Navigate to={"/"} replace/>}></Route>
          </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
