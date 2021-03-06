import React from "react";
import { Link } from "react-router-dom";
import LikesContainer from "../../likes/likes_container";
import { withRouter } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.post.id);
    this.props.fetchPostComments(this.props.post.id);
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDelete(e) {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this post?") &&
      this.props.deletePost(this.props.post.id).then(() => {
        this.props.history.push(`/my-profile`);
      });
  }

  handleComment(e) {
    e.preventDefault();
    const comment = { body: this.state.body, post_id: this.props.post.id };
    this.props
      .createComment(comment)
      .then(() => {
        this.props.fetchPost(this.props.post.id);
      })
      .then(() => {
        this.props.clearErrors();
      });
    this.setState({ body: "" });
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul className="login-errors modal-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <h2>Loading...</h2>;
    }

    let postComments = post.comments.map((comment, index) => {
      return (
        <div key={`${comment.id}-${index}`} className="post-show-comment">
          <Link className="profile-link" to={`/users/${comment.user_id}`}>
            {comment.author}
          </Link>
          <span className="comment-body">&nbsp;{comment.body}</span>
          {comment.user_id === this.props.currentUser.id ? (
            <button
              className="delete-comment-button"
              onClick={() =>
                this.props
                  .deleteComment(comment.id)
                  .then(() => {
                    this.props.fetchPost(this.props.post.id);
                  })
                  .then(() => this.props.clearErrors())
              }
            >
              X
            </button>
          ) : (
            <div></div>
          )}
        </div>
      );
    });

    const {
      photoUrl,
      author,
      body,
      likers,
      authorPhotoUrl,
      user_id
    } = this.props.post;
    //   authorPhotoUrl should be worked on
    return (
      <div>
        {this.renderErrors()}

        <div className="post-box">
          <img
            className="post-show-image"
            className="post-show-image"
            src={photoUrl}
          />
          <div className="post-show-detail-box">
            <div className="post-author">
              <div className="post-author-links">
                <Link className="author-link" to={`/users/${user_id}`}>
                  <img className="feed-profile-pic" src={authorPhotoUrl} />
                  {author}
                </Link>
              </div>
              <div className="post-author-delete">
                {user_id === this.props.currentUser.id ||
                this.props.currentUser.username === "InstaThronesAdmin" ? (
                  <button className="delete-button" onClick={this.handleDelete}>
                    <FaTrashAlt />
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="post-comments">
              <span>
                {body ? (
                  <div className="post-bio">
                    <Link
                      onClick={this.closeModal}
                      className="profile-link"
                      to={`/users/${user_id}`}
                    >
                      {author}
                    </Link>
                    &nbsp;{body}
                  </div>
                ) : (
                  <div></div>
                )}
              </span>
              <span>{postComments}</span>
            </div>
            <div className="post-show-likes">
              <div className="likes-div">
                <div className="show-buttons">
                  <LikesContainer id={this.props.post.id} />
                  {/* icon for comments should be implemented here */}
                </div>
                <div className="show-likecount">
                  {/* {likers.length === 1 ? (
                                         `${likers.length} like`
                                    ): (
                                        `${likers.length} likes`
                                    )} */}
                </div>
              </div>

              <div className="show-comment-container">
                <form className="show-comment-form">
                  <textarea
                    className="show-textarea"
                    value={this.state.body}
                    onChange={this.update("body")}
                    placeholder="Add a comment..."
                  ></textarea>
                  <button
                    className="submit-comment-button"
                    onClick={this.handleComment}
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostShow);
