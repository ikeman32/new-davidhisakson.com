const header = {
    name: 'David H Isakson II',
    title: 'Full Stack Developer',
    email: 'david.isakson.ii@gmail.com',
    web: 'https://davidhisakson.com/',
    phone: '509-750-4287',
    location: 'Moses Lake, WA 98837',
    linkedin: 'https://www.linkedin.com/in/david-h-isakson-ii/',
    github: 'https://github.com/ikeman32/'
};

const summary = '';

const edu = [
    {
        school: 'Lambda School',
        from: '09/2019',
        to: '07/2020',
        degree: 'Other',
        major: 'Full Stack Web Development',
    },
    {
        school: 'Wenatchee Valley College',
        from: '08/1999',
        to: '06/2001',
        degree: 'Associates',
        major: 'Business Information Technology',
    },
];

const skills =[
    {
        type: 'Web Development',
        skill: [
            'React', 
            'Node.js', 
            'Python', 
            'LESS/SASS', 
            'CSS', 
            'HTML', 
            'JavaScript', 
            'SQL', 
            'JSON', 
            'Git', 
            'Linux', 
            'Redux', 
            'Express.js', 
            'Electron.js', 
            'Agile Program Management', 
            'Algorithms', 
            'Asynchronous Javascript' , 
            'Graphs'
        ]
    }
];

const workExp = [
    {
        company: 'ABM',
        position: 'Janitor',
        location: 'Moses Lake, WA',
        from: '04/2019',
        to: '11/2019',
        desc: [
            'Maintain buildings and grounds for company clients',
            'Deploy saftey equipment as needed',
            'Restock supplies'
        
        ],
    },
    {
        company: 'Bud Clary Auto Group',
        position: 'Automotive Service Technician',
        location: 'Moses Lake, WA',
        from: '04/2017',
        to: '02/2019',
        desc: [
            'Performed lubrication service and general repairs, batteries, tires, etc',
            'Inspect customer vehicle for damage and saftey concerns',
            'Completed from 9 to 15 customer vehicles daily'
        ],
    },
]

const projects = [
    {
        name: 'Facebook Clone',
        from: '09/2020',
        to: 'Current',
        web: 'https://github.com/ikeman32/fb-clone',
        summary: 'A Facebook Clone with the backend on Firebase’s Firestore. This project is a work in progress and is partially functional; however, only the backend is deployed at this time. Once more functionality is built-in a fully functional demo will be available.',
        desc: [
            'React',
            'Firebase'
        ],
    },
    {
        name: 'Signlingo',
        from: '04/2020',
        to: '06/2020',
        web: 'https://github.com/Lambda-School-Labs/signlingo-be',
        summary: 'Signlingo is a mobile-first designed web application to teach ASL (American Sign Language). It is loosely models off of Duolingo but focusing on ASL.',
        desc: [
            'Built the backend with a team of developers using dukeapi for the codebase',
            'Deployed backend using Heroku PostgreSQL'
        ],
    },
    {
        name: 'Dukeapi',
        from: '02/2020',
        to: 'Current',
        web: 'https://www.npmjs.com/package/dukeapi',
        summary: 'A personally built open-source boilerplate for a RESTful API using Node, Express, and Knex',
        desc: [
            'Built personal project for rapid development of RESTful API',
            'Deployed as a node package on npmjs.com'
        ],
    },
    {
        name: 'Custom React Template',
        from: '02/2020',
        to: 'Current',
        web: 'https://www.npmjs.com/package/cra-template-duke',
        summary: 'A personally built open-source custom React Template for rapid website development with Reactjs',
        desc: [
            'Built personal project using Javascript, JSX, JSON',
            'Deployed as a node package on npmjs.com'
        ],
    },
]

export{
    header,
    summary,
    edu,
    skills,
    workExp,
    projects,
};