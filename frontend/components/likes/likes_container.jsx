import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Likes from "./likes";
import { createLike, deleteLike } from "../../actions/likes_actions";
import { fetchPost } from "../../actions/posts_actions";
import {
  getIsLikedPost,
  getNumberOfLikes
} from "../../selectors/posts_selectors";

const mapStateToProps = createStructuredSelector({
  isLikedPost: getIsLikedPost,
  count: getNumberOfLikes
});

const mapDispatchToProps = {
  createLike,
  deleteLike,
  fetchPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
