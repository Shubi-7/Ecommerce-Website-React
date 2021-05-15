import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Forgetpassword from './components/auth/Forgetpassword'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Homepage from './components/pages/Homepage'

const Routes = () => {
    return (
        <>
        <Router>
            <Switch>

            <Route exact path="/" component={Homepage}/>

            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={Signup}/>

            <Route exact path="/forgetpassword" component={Forgetpassword} />

            </Switch>
        </Router>
            
        </>
    )
}

export default Routes
