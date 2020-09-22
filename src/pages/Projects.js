import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { ProjectCards } from './';

const Container = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%',
    minHeight: '73vh',
});

function Projects() {
    return (
        <Container>
            <ProjectCards />
        </Container>
    )
}

export default Projects
