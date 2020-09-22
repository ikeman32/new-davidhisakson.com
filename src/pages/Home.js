import React from 'react';
import { Card, Box, Tooltip } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { me } from '../components/Assets'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const AboutMe = styled(Card)({
    borderRadius: '1rem',
    width: '280px',
    height: '410px',
    marginRight: '6rem',
    marginBottom: '2rem'
});

const GitHubStats = styled(Card)({
    borderRadius: '1rem',
    width: '450px',
    height: '190px',
    margin: 'auto 0',
    marginLeft: '2rem'
});

const TechStack = styled(Card)({
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: '200px',
    marginTop: '1rem',
    marginBottom: '2rem',
});

const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
});

const MyPic = styled(Box)({
    height: '80%',
    width: '40%',
    padding: '1rem'
});

const MyIcons = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '1rem',
    color: '#056676'
});

const MyHome = styled(Box)({
    display: 'flex',
    width: '100%',
    justifyItems: 'space-between',
    flexWrap: 'wrap',
    justifyContent: 'center'
});

const Badge = styled(Box)({
    display: 'flex',
});

const Badge1 = styled(Box)({
    display: 'flex',
    maxWidth: '30%'
});

function Home() {

    return (

        <MyHome>
            <AboutMe>
                <Container>
                    <MyPic>
                        <img src={me} style={{
                            maxWidth: '100%',
                            maxWeight: '50%',
                            borderRadius: '50%',
                        }} alt='' />
                    </MyPic>
                    <MyIcons>
                        <Tooltip title='Git Hub' arrow placement='right' >
                            <a href='https://github.com/ikeman32/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#056676' }}>
                                <GitHubIcon fontSize='large' />
                            </a>
                        </Tooltip>
                        <Tooltip title='david.isakson.ii@gmail.com' arrow placement='right' >
                            <EmailIcon fontSize='large' />
                        </Tooltip>
                        <Tooltip title='LinkedIn' arrow placement='right'>
                            <a href='https://www.linkedin.com/in/david-h-isakson-ii/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#056676' }}>
                                <LinkedInIcon fontSize='large' />
                            </a>
                        </Tooltip>
                        <Tooltip title='You Tube' arrow placement='right'>
                            <a href='https://www.youtube.com/channel/UCL11jXWKQ0kY6ljqoTRY_mw?view_as=subscriber' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#056676' }}>
                                <YouTubeIcon fontSize='large' />
                            </a>
                        </Tooltip>
                    </MyIcons>
                </Container>
                <Badge1>
                    <a href='https://www.youracclaim.com/earner/earned/badge/aa3beb26-6d70-4556-ad9b-ff71be5d1bae'
                        target="_blank" rel="noopener noreferrer">
                        <img src={'https://images.youracclaim.com/size/110x110/images/866c4132-ed2f-44f5-83df-86bf2ae639d9/lambda-badge-full-stack-web.png'} alt='' />
                    </a>
                    <a href='https://www.youracclaim.com/earner/earned/badge/aa3beb26-6d70-4556-ad9b-ff71be5d1bae'
                        target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#056676' }}>
                        <p style={{ marginTop: '1.5rem' }}>Full-Stack Web Development + Technical Interviewing</p>
                    </a>
                </Badge1>
                <Badge>
                    <a href='https://lambdaschool.com/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#056676' }}>
                        <img src={'https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5dcda59e63bb6ae5c9282801_small-red-logo.png'} style={{ maxWidth: '50%', marginLeft: '1rem' }} alt=''/>
                    </a>
                </Badge>
                <InfoOutlinedIcon style={{ marginTop: '1rem', marginLeft: '1rem', color: '#056676' }} fontSize='large' />
                <h3 style={{ marginTop: '1rem', marginRight: '6rem', color: '#056676', float: 'right' }}>See my resume</h3>
            </AboutMe>
            <GitHubStats>
                <img align="left" alt="ikeman32's Github Stats" src="https://github-readme-stats.vercel.app/api?username=ikeman32&show_icons=true&hide_border=true&theme=blue-green" />
            </GitHubStats>

            <TechStack>
                <h3 style={{margin: '1rem 0',textAlign: 'center', color: '#056676'}} >To boldly code what no one has coded before!</h3>
                <p style={{margin: '1rem 2rem', color: '#056676'}} >Languages and Tools</p>
                <ul id='tech-stack' style={{listStyle: 'none', margin: '0 auto'}} >
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/color/64/000000/visual-studio.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/plasticine/64/000000/react.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/dusk/64/000000/javascript-logo.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/color/48/000000/python.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://nodejs.org/static/images/logo.svg" height='64' width='64' alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/nolan/64/html-filetype.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/nolan/64/css-filetype.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/color/64/000000/sass.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="http://lesscss.org/public/img/less_logo.png" height='64px' width='64px' alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/color/64/000000/redux.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/color/64/000000/git.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/fluent/64/000000/github.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://img.icons8.com/color/64/000000/linux.png" alt='' /></li>
                    <li style={{float: 'left', paddingLeft: '0.5rem' }} >
                        <img src="https://avatars3.githubusercontent.com/u/13409222?s=200&v=4" height='64px' width='64px' alt='' /></li>
                </ul>

            </TechStack>

        </MyHome>


    )
}

export default Home
