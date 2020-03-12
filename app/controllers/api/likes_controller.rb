class Api::LikesController < ApplicationController 
     

#    def get_by_post_id 
#         @like = Like.find_by(post_id: params[:id])
#    end

   def index 
      @likes = Like.all.where(post_id: like_params[:post_id])
   end

   def show 
     #    @like = Like.find_by(id: params[:id])
   end
   
   def create 
       
       
        @like_find = Like.find_by(user_id: current_user.id, post_id: like_params[:post_id])
     #     console.log(@like_find)
        #  debugger
        if @like_find
          @like_find.destroy
          response = {action: 'remove', post_id: like_params[:post_id], user_id: current_user.id}
          render json: response
           
        else  
             @like = Like.new(like_params)
             #console.log(@like,"#")
             @like.user_id = current_user.id 
             if @like.save
               #  console.log(@like, 'my like')
               response = {action: 'new', post_id: like_params[:post_id], user_id: current_user.id, data: @like}
               render json: response, status: 201 
               #  render json: ["Likes added successfully"], status:201
             else  
                render json: @like.errors.full_messages, status: 422
             end
         end
    end
        

   def destroy  
        @like = Like.find_by(user_id: current_user.id, post_id: params[:id])

        if @like 
            @like.destroy
            render :show 
        else  
            render json: ["User is only able to remove their own likes"], status: 422
        end

   end

   private 
     def like_params 
        params.require(:like).permit(:post_id)
     end

end

# New Implementation


#      def create 
       
#         if !@like_find
          
#              @like = Like.new(like_params)
#              @like.user_id = current_user.id 
#              if @like.save
#                response = {like: @like, message: 'Likes added successfuly'}
#                render json: response, status: 201 
#              else  
#                 render json: @like.errors.full_messages, status: 422
#              end
#          end
#     end

#     def destroy
#         if @like_find
#           @like_find.destroy
#           render json: {message: 'Like removed'}
#         end
#     end

#     def set_like
#       @like_find = Like.find_by(user_id: current_user.id, post_id: like_params[:post_id])
#     end
# end