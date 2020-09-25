import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { ProjectCards, ResProjectCards } from './';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

const Container = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%',
    minHeight: '73vh',
});

function Projects(props) {
    return (
        <Container>
            <Hidden mdDown>
                <ProjectCards />
            </Hidden>
            <Hidden only='lg'>
                <ResProjectCards />
            </Hidden>
        </Container>
    )
}

Projects.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default Projects
