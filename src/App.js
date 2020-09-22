import React from 'react';
import { Navbar, Footer, Routes} from './components';
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const Appbody = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  minHeight: '73vh'
})


function App() {
  return (
    <div className='app' >
      <Navbar />
      <Appbody>
        <Routes />
        
      </Appbody>
      <Footer className='footer' />
    </div>
  );
}

export default App;
