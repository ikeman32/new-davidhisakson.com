import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const Navigation = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3F4045',
    padding: '15px',
});

const Bar = styled(Box)({
    // border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    maxHeight: '100%',
    width: '80%',
    color: 'whitesmoke',
    padding: '0 8px'
})

function Navbar() {
    return (
        <Navigation>
            <Bar>
                <MenuList style={{ display: 'flex', maxWidth: '100%' }}>
                    <MenuItem>
                        Home
                    </MenuItem>
                    <MenuItem style={{marginLeft: '1rem'}}>
                        Projects
                    </MenuItem>
                    <MenuItem style={{marginLeft: '1rem'}}>
                        About
                    </MenuItem>
                    <MenuItem style={{marginLeft: '1rem'}}>
                        Blog
                    </MenuItem>
                </MenuList>
            </Bar>
        </Navigation>
    )
}

export default Navbar
