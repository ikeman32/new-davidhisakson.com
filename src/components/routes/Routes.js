import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Projects } from '../../pages';

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path='/Projects' component={Projects} />
            <Route path='/About' component={About} />
            {/* 
            <Route path='/Videos' component={Videos} />
            
            <Route path='/Contact' component={Contact} /> */}
        </>
    )
}

export default Routes;