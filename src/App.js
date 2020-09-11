import React from 'react';
import { Navbar, Footer} from './components';
import { Home } from './pages'
import './App.css';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app_body'>
        <Home />
        
      </div>
      <Footer className='footer' />
    </div>
  );
}

export default App;
