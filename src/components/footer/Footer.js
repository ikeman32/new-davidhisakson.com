import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Footers = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#bbd196',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100%',
});
const Bar = styled(Box)({
    // border: '1px solid white',
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '20%',
    width: '100%',
    color: '#056676',
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
