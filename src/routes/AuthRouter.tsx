import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import StepOne from '../components/stepOne';
import StepTwo from '../components/stepTwo';
const AuthRouter = ( props : RouteComponentProps  ) => {

    return (
     
      <Router>
            <Switch>
                <Route path='/register/stepOne' component = { StepOne }/>
                <Route path='/register/stepTwo' component = { StepTwo }/>
                <Redirect to='/register/stepOne'/>
            </Switch>
      </Router>
    )
}
export default withRouter(AuthRouter);