class Api::FollowingsController < ApplicationController 

  def create 
        @follow = Following.new(follow_params)
        @follow.user_id = current_user.id 

        if @follow.save
            render :show 
        else
            render json: @follow.errors.full_messages, status: 422
        end
  end

   def show 
        @follow = Following.find_by(id: params[:id])
   end

  def destroy 
  
    @follow = Following.find_by!(user_id:current_user.id, followed_user_id:params[:id])
    
     @follow.destroy
    render :show

  end

  def index 
    @followings = Comment.all.where(user_id: params[:user_id])

  end

 

  private 

  def follow_params
        params.require(:follow).permit(:user_id,:followed_user_id)
  end


end