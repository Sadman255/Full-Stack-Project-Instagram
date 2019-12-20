import { connect } from 'react-redux';
import React from 'react';
import { signup, clearSessionErrors} from '../../../actions/session_actions';
import SignUpForm from './signup_form'


const mapStateToProps = ({errors}) => { 
 
return    {
    errors: errors.session,
    formType: 'signup',

} }

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm)