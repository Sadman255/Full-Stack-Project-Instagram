import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../../actions/session_actions';
import SessionForm from './session_form'

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
})

const mapDispatchToProps = dispatch =>({
    processForm: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)