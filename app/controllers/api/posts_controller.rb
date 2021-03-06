class Api::PostsController < ApplicationController

    before_action :require_login


    def explore_posts 
        @posts = Post.all
        # loop through posts and populate "userLikes" array with user_id by querying likes from database
        # get all likes that match post_id, then pick userId from it and push to userLikes prop on that specific post
        render :index
    end

    def profile_posts 
        @posts = Post.where(user_id: params[:id])
        render :index
    end
    
    def feed_posts 
        @posts = Post.where(user_id: current_user.followings.ids)
        render :index
    end
    

    def show 
        @post = Post.find(params[:id])
        render :show
    end

    def create 
    
        @post = Post.new(post_params)
        @post.user_id = current_user.id
    
        if @post.save 
            render :show 
        else  
            render json: @post.errors.full_messages,status: 422 
        end
    end
    
    def update 
        @post = Post.find(params[:id])

        if @post.update(post_params)
                render :show 
        else  
            render json: @post.errors.full_messages,status: 422 
        end
    end

    def destroy 
        @post = Post.find(params[:id])
         
         if @post.user_id = current_user.id 
             @post.destroy 
         else   
            render json: ["Users are only able to delete pictures they have posted"], status: 401
         end
        render :show
    end

    
    private 

    def post_params 
        params.require(:post).permit(:body,:photo,:post_id)
    end


end


