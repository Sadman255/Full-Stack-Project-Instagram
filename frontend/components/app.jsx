 import React from 'react';
 import {Switch} from 'react-router-dom';

 import LoginFormContainer from './user/user_auth/login_form_container';
 import SignUpFormContainer from './user/user_auth/signup_form_container';

 import { AuthRoute, ProtectedRoute } from '../util/route_util';


 const App = () => (

     <div className="page">
            <header className="headerBar"> 
            </header>
              <Switch>
                    <AuthRoute path="/login" component={LoginFormContainer} />
                    <AuthRoute path="/signup" component={SignUpFormContainer}/> 
             </Switch> 
     </div>
 )
 export default App;