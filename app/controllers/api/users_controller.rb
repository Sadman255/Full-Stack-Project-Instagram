class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)

         @user.photo.attach(io: File.open("#{Rails.root}/app/assets/images/got_profile.png"), filename: 
         "got_profile.png")
         @user.bio = ""
        
        if @user.save 
            login(@user)
             render "api/users/show"
        else  
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index 
      @users = User.all 
      render :index
    end


    def show 
        @user = User.find(params[:id])

         if @user 
            render :show 
         else 
             render json: @user.errors.full_messages, status:422
         end
    end


    def update 
        @user = current_user
       
        if @user.update(user_params)
            render :show
        else 
            render json: @user.errors.full_messages, status:422
        end
    end
    
    def destroy 
       @user = User.find(params[:id])

       if @user && current_user.username == 'InstaThronesAdmin'
          @user.destroy
          @admin = current_user 
          render :admin
       else 
         render json: ["Unable to delete account"]
       end

    end

    private 

    def user_params 
         params.require(:user).permit(:username, :email, :bio, :photo, :password)
    end

 
    
end
