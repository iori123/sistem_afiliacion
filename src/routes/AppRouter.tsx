import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter
  } from 'react-router-dom';

import Home from '../components/home';
import AuthRouter  from './AuthRouter';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' component = { AuthRouter }/>
        <Route path='/' component = { Home }/>
        <Redirect to='/'/>
      </Switch>
    </Router>
  )
}
  
export default AppRouter;