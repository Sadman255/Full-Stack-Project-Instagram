import {connect} from 'react-redux';
import {createPost} from '../../../actions/posts_actions';
import {withRouter} from 'react-router-dom';
import PostForm from './post_form';

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    let errors = []
    return({
        photo: "",
        body: "",
        currentUser,
        errors
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createPost: post => dispatch(createPost(post))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(PostForm);