import merge from 'lodash/merge';
import {RECEIVE_ALL_POSTS,RECEIVE_POST,REMOVE_POST} from '../actions/posts_actions'



const postsReducer = (state={},action) => {

    Object.freeze(state)
    let newState = merge({},state) 

    switch(action.type){
         
         case RECEIVE_ALL_POSTS: 
            return action.posts
         case RECEIVE_POST: 
             newState[action.post.id] = action.post
         case REMOVE_POST:
             newState = merge({},state)
             delete newState[action.postId]
             return newState
         default:  
             return state

             
    }
}
export default postsReducer;