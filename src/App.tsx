import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import SignIn from './pages/sign/SignIn';
import SignUp from './pages/sign/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
