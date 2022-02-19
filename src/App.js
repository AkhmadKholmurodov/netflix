import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    const user = null;
  return (
   
    
          <BrowserRouter>
          {!user ? (
            <LoginScreen/>
          ) : (
            <Routes>
              <Route path="/" element={<HomeScreen/>} />
              <Route path="LoginScreen/*" element={<LoginScreen/>} />
            </Routes>
          )}
            
          </BrowserRouter>
      
    

      
  );
}

export default App;