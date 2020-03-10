import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getPosts } from "../../../selectors/posts_selectors";
import { fetchExplorePosts, deletePost } from "../../../actions/posts_actions";
import { closeModal, openModal } from "../../../actions/modal_actions";

import PostIndex from "./feed";

const mapStateToProps = createStructuredSelector({
  posts: getPosts
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(fetchExplorePosts()),
  deletePost: id => dispatch(deletePost(id)),
  openModal: data => dispatch(openModal("photoShow", data)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
