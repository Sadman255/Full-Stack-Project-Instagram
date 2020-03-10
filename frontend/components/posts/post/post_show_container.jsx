import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../../actions/posts_actions";
import PostShow from "./post_show";
import { closeModal, openModal } from "../../../actions/modal_actions";
import {
  fetchPostComments,
  createComment,
  deleteComment,
  clearErrors
} from "../../../actions/comments_actions";
import { getPostById } from "../../../selectors/posts_selectors";
import { getCurrentUser } from "../../../selectors/users_selectors";

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.comment;

  return {
    currentUser: getCurrentUser(state),
    errors,
    post: getPostById(state, { id: ownProps.data.postId })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(deletePost(id)),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
    openModal: data => dispatch(openModal("photoShow", data)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
