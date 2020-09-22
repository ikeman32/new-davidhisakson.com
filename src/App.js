import React from 'react';
import { Navbar, Footer, Routes} from './components';
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const App_body = styled(Box)({
  display: 'flex',
  justifyContent: 'center'
})


function App() {
  return (
    <div className='app'>
      <Navbar />
      <App_body>
        <Routes />
        
      </App_body>
      <Footer className='footer' />
    </div>
  );
}

export default App;
