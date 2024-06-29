import React from 'react'
import './app.css';
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from './pages/auth/sign-in';
import Home from './pages/home/home';

export default function App() {
  return (
    <div className="app">
      <div className="header flex justify-between mx-3">
        <Link to='/' >App Google Oauth</Link>
        <ul>
          <Link to='/sign-in' >Sign In</Link>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/sign-in' element={<SignIn />} ></Route>
      </Routes>
    </div>
  )
}
