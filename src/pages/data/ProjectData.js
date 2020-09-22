import {
    api,
    ElectronLogo,
    fb,
    gameoflife,
    react,
    signlingo
} from '../../components/Assets';

const projectData = [
    {
        id: 0,
        img: api,
        web: 'https://www.npmjs.com/package/dukeapi',
        name: 'dukeapi',
        desc: 'A node package to generate boilerplate code for a RESTful API with JWT Authenication that will work right out of the box. It is intended to serve as the base code for a node backend using Express and Knex.',
    },
    {
        id: 1,
        img: ElectronLogo,
        web: 'https://www.npmjs.com/package/cra-template-electronapp',
        name: 'React Template for Electron.js',
        desc: 'Electron js is a framework for building desktop applications using Javascript, HTML and CSS. Some popular applications built with Electron are: VS Code, Slack, What’s App, Twitch, Mircorsoft Teams, and InVision. This personally built React Template incorporates Electron js and is configured to build applications for Window, Mac and Linux.',
    },
    {
        id: 2,
        img: fb,
        web: 'https://github.com/ikeman32/fb-clone',
        name: 'Facebook Clone',
        desc: 'A Facebook Clone built on React and Firebase Firestore, it is still a work in progress and is partially functional. When complete it will be an open source template for setting up a social media website. Presently only the backend is on firebase, once more functionality is built in a fully functional demo will be deployed.',
    },
    {
        id: 3,
        img: gameoflife,
        web: 'https://www.gameoflife.davidhisakson.com/',
        name: 'Game of Life',
        desc: 'An implementation of John Horton Conway’s Game of Life, the Game of Life is a demonstrations of a Cellular Automaton. Cellular automaton is a discrete model studied in automata theory, which is the study of abstract machines and automata, as well as the computational problems that can be solved by them.',
    },
    {
        id: 4,
        img: react,
        web: 'https://www.npmjs.com/package/cra-template-duke',
        name: 'Custom React Template',
        desc: 'A custom React App Template to develop that is a bit more stylish than the default template. This project is still a work in progress but can be readily used through Node Package Manager.',
    },
    {
        id: 5,
        img: signlingo,
        web: 'https://github.com/Lambda-School-Labs/signlingo-be',
        name: 'Signlingo Backend',
        desc: 'Signlingo is a mobile first designed web application to teach ASL (American Sign Language). It is loosely models off of Duolingo but focusing on ASL.',
    },
];

export {
    projectData
}