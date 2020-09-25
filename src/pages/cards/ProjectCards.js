import React from 'react';
import { Card } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { projectData } from '../data/ProjectData';

const Project = styled(Card)({
    display: 'flex',
    flex: '0 32%',
    flexDirection: 'column',
    borderRadius: '1rem',
    height: '580px',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '2%'
});

const ResponsiveProject = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1rem',
    height: '630px',
    paddingTop: '20px',
    paddingBottom: '20px',
    marginBottom: '4%',
})

const useStyles = makeStyles({
    name: {
        color: '#056676',
        textAlign: 'center',
    },
    description: {
        padding: '20px',
        textAlign: 'justify',
        fontSize: '1.3rem'
    },
    resDesc:{
        padding: '20px',
        textAlign: 'justify',
        fontSize: '1.4rem'
    },
    links: {
        textDecoration: 'none',
        color: '#056676',
        textAlign: 'center'
    },
    imgs: {
        width: '160px',
        height: '160px',
    }
});


function ProjectCards() {
    const styles = useStyles();

    const proj = projectData.map(item => {
            return (
            <Project id={item.id}>
                <a href={item.web} target="_blank" rel="noopener noreferrer" className={styles.links} >
                    <img src={item.img} alt='img' style={{ maxWidth: '100%' }} className={styles.imgs} />
                </a>
                <Typography variant='h4' className={styles.name} >
                    <a href={item.web} target="_blank" rel="noopener noreferrer" className={styles.links} >
                        {item.name}
                    </a>
                </Typography>
                <Typography variant='body1' className={styles.description}>
                    {item.desc}
                </Typography>
            </Project>

        );
    });

    return proj;
};

function ResProjectCards(){
    const styles = useStyles();

    const proj = projectData.map(item => {
            return (
            <ResponsiveProject id={item.id}>
                <a href={item.web} target="_blank" rel="noopener noreferrer" className={styles.links} >
                    <img src={item.img} alt='img' style={{ maxWidth: '100%' }} className={styles.imgs} />
                </a>
                <Typography variant='h4' className={styles.name} >
                    <a href={item.web} target="_blank" rel="noopener noreferrer" className={styles.links} >
                        {item.name}
                    </a>
                </Typography>
                <Typography variant='body1' className={styles.resDesc}>
                    {item.desc}
                </Typography>
            </ResponsiveProject>

        );
    });

    return proj;
}

export default ProjectCards

export{
    ResProjectCards
}
