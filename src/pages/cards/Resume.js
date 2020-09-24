import React from 'react';
import {
    header,
    summary,
    edu,
    skills,
    workExp,
    projects
} from '../data/ResumeData';
import { Card } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    head: {
        display: 'flex',
        color: '#056676',
    },
    paper: {
        height: '1056px',
        width: '816px',
        backgroundColor: 'white',
        marginBottom: '20px',
    },
    links: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '16px',
        marginLeft: '10px'
    },
    text: {
        color: 'black',
        fontSize: '16px',
        marginLeft: '12px'
    },
    edu: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    tcl: {
        width: '40%',
        marginRight: '5px',
        marginLeft: '10px'
        // border: '1px solid red'
    },
    tcr: {
        width: '60%',
        marginRight: '10px',
        marginLeft: '5px',
        // border: '1px solid red'
    },
    et: {
        paddingLeft: '10px'
    },
    ets: {
        paddingLeft: '10px',
        fontWeight: 'bold'
    },
    sk: {
        marginLeft: '10px',
    }
});

const Header = styled(Card)({
    display: 'flex',
    flex: '0 32%',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#e6ebeb',
    fontSize: '30px',
    boxShadow: 'none'
});

const Lh = styled(Card)({
    marginLeft: '15px',
    marginTop: '10px',
    width: '40%',
    backgroundColor: '#e6ebeb',
    boxShadow: 'none'
});

const Mh = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    width: '32%',
    marginTop: '10px',
    backgroundColor: '#e6ebeb',
    boxShadow: 'none'
})

const Rh = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    marginTop: '10px',
    marginRight: '20px',
    backgroundColor: '#e6ebeb',
    boxShadow: 'none'
});

const Top = styled(Card)({
    display: 'flex',
    boxShadow: 'none',
    width: '100%',
    marginTop: '20px'
});

const Edu = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    width: '100%',
    // border: '1px solid red'
});

const Et = styled(Card)({
    display: 'flex',
    boxShadow: 'none',
    justifyContent: 'space-between'
})

const Eb = styled(Card)({
    boxShadow: 'none',
});

const Skill = styled(Card)({
    display: 'flex',
    flexWrap: 'wrap',
    boxShadow: 'none',
    margin: '0 auto',
    width: '98%',
    // border: '1px solid blue',
})

const Summary = styled(Card)({
    boxShadow: 'none'
});

function Resume() {
    const styles = useStyles();
    return (
        <div className={styles.paper}>
            <HeaderCard />
            <TopCard />
            <div style={{ marginTop: '10px' }}>
                <SkillsCard />
            </div>
        </div>
    )
}

function HeaderCard() {
    const styles = useStyles();

    const myHeader = header.map(item => {
        return (
            <Header>
                <Lh>
                    <Typography variant='h4' className={styles.head}>
                        {item.name}
                    </Typography>
                    <Typography variant='h6' className={styles.head}>
                        {item.title}
                    </Typography>
                </Lh>
                <Mh>
                    <Typography variant='caption' className={styles.head}>
                        <EmailIcon fontSize='small' /> <a className={styles.links} href={'mailto:' + item.email}
                            target="_blank" rel="noopener noreferrer"
                        >{item.email}</a>
                    </Typography>
                    <Typography variant='caption' className={styles.head}>
                        <LanguageIcon fontSize='small' /><a className={styles.links} href={item.web}
                            target="_blank" rel="noopener noreferrer"
                        >davidhisakson.com</a>
                    </Typography>
                    <Typography className={styles.head}>
                        <PhoneIcon fontSize='small' />
                        <Typography className={styles.text}>{item.phone}</Typography>
                    </Typography>
                    <Typography className={styles.head}>
                        <AddLocationIcon fontSize='small' />
                        <Typography className={styles.text}>{item.location}</Typography>
                    </Typography>

                </Mh>
                <Rh>
                    <Typography variant='caption' className={styles.head}>
                        <LinkedInIcon fontSize='small' /><a className={styles.links} href={item.linkedin}
                            target="_blank" rel="noopener noreferrer"
                        >david-h-isakson-ii</a>
                    </Typography>
                    <Typography variant='caption' className={styles.head}>
                        <GitHubIcon fontSize='small' /><a className={styles.links} href={item.github}
                            target="_blank" rel="noopener noreferrer"
                        >ikeman32</a>
                    </Typography>
                </Rh>
            </Header>
        );
    })
    return myHeader;
}

function TopCard() {
    const styles = useStyles();

    return (
        <Top>
            <div className={styles.tcl}>
                <div style={{ backgroundColor: '#e6ebeb', marginBottom: '15px', marginLeft: '10px' }}>
                    <h2>Education</h2>
                </div>
                <EduCard />
            </div>
            <div className={styles.tcr}>
                <div style={{ backgroundColor: '#e6ebeb', marginBottom: '15px' }}>
                    <h2>Summary</h2>
                </div>
                <SummaryCard />
            </div>
        </Top>

    );
}

function EduCard() {
    const styles = useStyles();

    const education = edu.map(items => {
        return (
            <div className={styles.edu}>
                <Edu key={items.id}>
                    <Et>
                        <Typography className={styles.ets}>
                            {items.school}
                        </Typography>
                        <Typography className={styles.et}>
                            {items.from}
                        </Typography>
                        <Typography className={styles.et}>
                            {items.to}
                        </Typography>
                    </Et>
                    <Eb>
                        <Typography className={styles.et}>
                            {items.major}
                        </Typography>
                        <Typography className={styles.et}>
                            {items.degree}
                        </Typography>
                    </Eb>
                </Edu>
            </div >
        );
    });

    return education;
}

function SkillsCard() {
    const style = useStyles();
    const skill = skills.map(item => {
        return (
            <Typography variant='button' className={style.sk}>
                {item}
            </Typography>
        );
    });
    return (
        <div style={{marginRight: '20px', marginLeft: '20px'}}>
            <div style={{ backgroundColor: '#e6ebeb', marginBottom: '15px' }}>
                <h2>Summary</h2>
            </div>
            <Skill>{skill}</Skill>
        </div>
    )

}

function SummaryCard() {
    const mySummary = summary;
    return (
        <Summary>
            <Typography>
                {mySummary}
            </Typography>
        </Summary>
    )
}

export default Resume;
