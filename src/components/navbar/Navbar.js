import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box, MenuList, MenuItem, Avatar, Tooltip } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';

import { me } from '../Assets';

const Navigation = styled(Box)({
    display: 'flex',
    backgroundColor: '#c9c9c9;',
    width: '100%',
    paddingBottom: '15px',
    top: 0
});

const Bar = styled(Box)({
    // border: '1px solid white',
    display: 'flex',
    justifyContent: 'space-evenly',
    justifyItems: 'center',
    maxHeight: '100%',
    width: '100%',
    backgroundColor: '#bbd196',
    color: '#056676',
    paddingtop: '0 8px',
    marginBottom: '2rem'
});

const Avatars = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '30%',
    marginRight: '10px'
})



function Navbar() {
    return (
        <Navigation>
            <Bar>
                <Avatars>
                    <Avatar src={me} />
                    <h2>David H Isakson II</h2>
                </Avatars>
                <MenuList style={{ display: 'flex', width: '40%' }}>
                    <MenuItem>
                        <Tooltip title='Home' arrow>
                            <Link to='/'>
                                <HomeIcon fontSize='large' />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem style={{ marginLeft: '1rem' }}>
                        <Tooltip title='About Me' arrow>
                            <Link to='/About'>
                                <InfoOutlinedIcon fontSize='large' />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem style={{ marginLeft: '1rem' }}>
                        <Tooltip title='Projects' arrow>
                            <Link to='/Projects'>
                                <CodeIcon fontSize='large' />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem style={{ marginLeft: '1rem' }}>
                        <Tooltip title='Blog' arrow>
                            <Link to='/Blog'>
                                <DescriptionIcon fontSize='large' />
                            </Link>
                        </Tooltip>
                    </MenuItem>
                </MenuList>
            </Bar>
        </Navigation>
    )
}

export default Navbar
