import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchPost, deletePost } from "../../../actions/posts_actions";
import {
  fetchPostComments,
  createComment,
  deleteComment,
  clearErrors
} from "../../../actions/comments_actions";
import PostIndexItem from "./feed_item";
import { closeModal, openModal } from "../../../actions/modal_actions";
import { getComments } from "../../../selectors/comments_selector";
import { getCurrentUser } from "../../../selectors/users_selectors";

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser,
  comments: getComments
});

// const mapStateToProps = (state, ownProps) => {
//     const currentUser = state.entities.users[state.session.id];

//     let comments;

//     if(state.entities.comments) {
//         comments = Object.values(state.entities.comments)
//     }

//     const comment = getCommentsById(state, { id: ownProps.commentId })

//     return({
//         currentUser,
//         comments
//     })
// }

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(deletePost(id)),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
    openModal: data => dispatch(openModal("photoShow", data)),
    openErrorModal: data => dispatch(openModal("commentError", data)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()) // ??
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);
