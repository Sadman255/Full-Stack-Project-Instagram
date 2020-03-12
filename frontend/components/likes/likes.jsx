import React from "react";

const Likes = ({ isLikedPost, createLike, id, fetchPost }) => {
  const handleLike = e => {
    e.preventDefault();
    createLike({ post_id: id }).then(() => fetchPost(id));
  };

  return (
    <div>
      <div className="like-button-div">
        <div className="like-button">
          {isLikedPost ? (
            <div className="like-button-liked" onClick={handleLike}>
              <span>&#9829;</span>
            </div>
          ) : (
            <div className="like-button-unliked" onClick={handleLike}>
              <span>&#9825;</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Likes;
