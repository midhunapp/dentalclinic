import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from './components/core/theme-provider/theme-provider';
import AppLayoutAdmin from './AppLayoutAdmin'
import AddUsers from './components/admin/addUsers';
import AddTreatments from './components/admin/addTreatments';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
    <div className="App">
   
    <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route element={<AppLayoutAdmin />} >
            <Route path="/addUser" element={<AddUsers />} />
            <Route path="/addTreatments" element={<AddTreatments />} />
          </Route>         
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
  </Provider>
  ); 
}

export default App;
