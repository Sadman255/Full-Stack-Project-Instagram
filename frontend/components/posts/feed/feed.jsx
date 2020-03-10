import React from "react";

import NavBarContainer from "../../nav_bar/nav_bar_container";
import FeedIndexItemContainer from "./feed_item_container";

const PostIndex = ({ posts, action, closeModal }) => {
  React.useEffect(() => {
    action();
    closeModal();
  }, []);

  const allPosts = posts.map(post => {
    return <FeedIndexItemContainer key={post.id} post={post} />;
  });

  return (
    <div>
      <NavBarContainer />

      <section className="feed-container">
        <div className="feed-left"></div>
        <div className="feed-mid">
          <ul className="feed-images">{allPosts}</ul>
        </div>
        <div className="feed-right"></div>
      </section>
    </div>
  );
};

// class PostIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.action();
//     this.props.closeModal();
//   }

//   render() {
//     let allPosts = this.props.posts.map(post => {
//       // debugger
//       return <FeedIndexItemContainer key={post.id} post={post} />;
//     });

//     return (
//       <div>
//         <NavBarContainer />

//         <section className="feed-container">
//           <div className="feed-left"></div>
//           <div className="feed-mid">
//             <ul className="feed-images">{allPosts}</ul>
//           </div>
//           <div className="feed-right"></div>
//         </section>
//       </div>
//     );
//   }
// }

export default PostIndex;
