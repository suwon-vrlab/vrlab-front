// Themes
import LoginPage from '../AccountType/LoginPage/index';
import RegisterPage from '../AccountType/RegisterPage/index';
import AdminLoginPage from '../AccountType/AdminLoginPage/index'

import React from 'react';
import {Link, Route} from 'react-router-dom';


const App = (props) => {
    return (
        <React.Fragment>
            <div className="home-btn d-none d-sm-block">
                <Link to="/"><i className="fas fa-home h2 text-dark"></i></Link>
            </div>
            <Route path={'/account/login'} component={LoginPage}/>
            <Route path={'/account/register/'} component={RegisterPage}/>
            <Route path={'/account/admin'} component={AdminLoginPage}/>
        </React.Fragment>
    )
};
export default App;