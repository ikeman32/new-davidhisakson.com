import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Footers = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3F4045',
    padding: '15px',
    maxWidth: '100%'
});
const Bar = styled(Box)({
    // border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '90%',
    width: '80%',
    color: 'whitesmoke',
})

function Footer() {
    return (
        <Footers>
            <Bar>
                <Box component='h3'>
                    Copyright © 2020 <strong style={{marginLeft: '1rem'}}>David H Isakson II</strong>
                </Box>
            </Bar>
        </Footers>
    )
}

export default Footer
