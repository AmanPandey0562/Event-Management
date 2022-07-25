import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Home from './Components/Home';
import AddEvents from './Components/AddEvents';
import { View } from './Components/View';
import AddonEvents from './Components/AddonEvents';
import EditUser from './Components/EditUser';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="AddEvents" element={<AddEvents/>}/>
      <Route path="View" element={<View/>}/>
      <Route path="AddonEvents" element={<AddonEvents/>}/>
      <Route path="/EditUser/:id" element={<EditUser/>}/>
      <Route path="About" element={<About/>}/>

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
