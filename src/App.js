import React from 'react';
import {Route} from 'react-router-dom';
import routers from './router';
import NavBar from './Components/Layout/NavBar';

function App() {
    return (
        <React.Fragment>
            <header>
                <NavBar/>
            </header>
            {routers.map((route,index) => <Route key={index} {...route}/>)}

        </React.Fragment>
    );
}

export default App;
