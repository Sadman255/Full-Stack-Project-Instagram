import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import {withRouter} from './feed_item_container';
import FeedIndexItemContainer from './feed_item_container';

class PostIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.action();
        this.props.closeModal()
    }

    render(){
        
        let allPosts = this.props.posts.map( post => {
            // debugger
            return(
                <FeedIndexItemContainer key={post.id} post={post} />
            )
        })

       return (
           <div>
               <NavBarContainer />

               <section className="feed-container">
                   <div className="feed-left"></div>
                   <div className="feed-mid">
                       <ul className="feed-images">
                            {allPosts}
                       </ul>
                   </div>
                   <div className="feed-right"></div>
               </section>
           </div>
       )
    }
}

//  export default withRouter(PostIndex);
  export default PostIndex;