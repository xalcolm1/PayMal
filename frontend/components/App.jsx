import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import loginFormContainer from './sessions/login_form_container';
import signupFormContainer from './sessions/signup_form_contaner';
import {AuthRoute} from '../util/route_util';
import NavContainer from './navcontainer/NavContainer';
import HomePage from './Homepage/Homepage'
import Modal from './modal/modal'
// import SigninModalContainer from './modal/signin_modal_container';
// import SignupModalContainer from './modal/signup_modal_container';



const App = () => (
    <>
        <header className='hbar'>
            <Link to="/" className="logo"> <img src={OuverteURL} height="45"/></Link>
       
            <NavContainer className="auth-route" />
            {/* <SignupModalContainer />
            <SigninModalContainer /> in development */}
        </header>


        {/* <HomePage/>  */}

        <Switch>
            <Route  path="/" component={HomePage}/>
            <Route  path="/profile" component={Modal}/>
        </Switch>
    
        <AuthRoute exact path="/signup" component={signupFormContainer}/>
        <AuthRoute exact path="/login" component={loginFormContainer}/>
    </>

);

export default App;