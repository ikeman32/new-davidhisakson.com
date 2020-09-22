import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    width: '90%',
});

function About() {
    return (
        <Container>
            <iframe style={{width: '850px', height: '1100px', marginBottom: '2rem'}} src="https://resume.creddle.io/embed/1t096pf4ebj" title='resume'
                    seamless></iframe>
        </Container>
    )
}

export default About
