 import React from 'react';
 import {Switch} from 'react-router-dom';
 import Modal from './modal';

 import LoginFormContainer from './user/user_auth/login_form_container';
 import SignUpFormContainer from './user/user_auth/signup_form_container';
 import PostFormContainer from './posts/post/post_form_container';
 import MainProfileContainer from './user/profile/main_profile_container';
 import UserUpdateFormContainer from './user/edit_user/user_update_form_container';
 import UserShowContainer from './user/profile/user_show_container'
 import { AuthRoute, ProtectedRoute } from '../util/route_util';


 const App = () => (

     <div className="page">
          <Modal/>
            <header className="headerBar"> 
            </header>
              <Switch>
                    <AuthRoute path="/login" component={LoginFormContainer} />
                    <AuthRoute path="/signup" component={SignUpFormContainer}/>
                    
                    <ProtectedRoute exact path="/new-post" component={PostFormContainer}/>
                    <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                    <ProtectedRoute exact path="/edit-profile" component={UserUpdateFormContainer} />
                    <ProtectedRoute path="/" component={MainProfileContainer} />
             </Switch> 
     </div>
 )
 export default App;