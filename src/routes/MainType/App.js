// Themes

import AdminAccountPage from './AdminAccountPage/index';
import ContactPage from './ContactPage/index';
import AdvisorPage from './AdvisorPage/index';
import IntroductionPage from './IntroductionPage/index';
import MainPage from './MainPage/index';
import BoardPage from './BoardPage/index';
import DataPage from './DataPage/index';

import React, {useEffect, useState} from 'react';
import {Link, Route} from 'react-router-dom';

import TopBar from "./components/TopBar";
//import Footer from "../../componets/Footer";

const App = ({history}) => {

    const [loginMode, setLoginMode] = useState(0);

    return (
        <React.Fragment>
            <TopBar
            history={history}
            loginMode={loginMode}
            />
            <Route path={'/'} component={MainPage}/>
            <Route path={'/admin'} component={AdminAccountPage}/>
            <Route path={'/advisor'} component={AdvisorPage}/>
            <Route path={'/board'} component={BoardPage}/>
            <Route path={'/introduction/'} component={IntroductionPage}/>
            <Route path={'/contact'} component={ContactPage}/>
            <Route path={'/data'} component={DataPage}/>
        </React.Fragment>
    )
};

export default App;