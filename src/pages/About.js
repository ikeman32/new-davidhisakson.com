import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Resume } from './';

const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    overflow: 'auto',
});

function About() {
    return (
        <Container>
            <Resume />
            {/* <iframe style={{width: '850px', height: '1100px', marginBottom: '2rem'}} src="https://resume.creddle.io/embed/1t096pf4ebj" title='resume'
                    seamless></iframe> */}
        </Container>
    )
}

export default About
