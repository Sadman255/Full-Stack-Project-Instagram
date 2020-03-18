import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import PostShowContainer from "./posts/post/post_show_container";
import CommentErrorModal from "./posts/feed/comment_error_modal";

function Modal({ modal, closeModal }) {
  if (!modal) return null;

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {modal.type === "photoShow" && <PostShowContainer data={modal.data} />}
        {modal.type === "commentError" && <CommentErrorModal />}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
