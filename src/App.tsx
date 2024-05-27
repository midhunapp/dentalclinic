import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Adminhome from './pages/admin/adminhome'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
   
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="adminhome" element={<Adminhome />} />
      </Routes>
    </BrowserRouter>
    </div>
  </Provider>
  ); 
}

export default App;
