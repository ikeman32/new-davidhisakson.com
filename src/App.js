import React from 'react';
import { Navbar, Footer, Body } from './components';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app_body'>
        <Body />
        
      </div>
      <Footer className='footer' />
    </div>
  );
}

export default App;
