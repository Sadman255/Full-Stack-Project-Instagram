class Post < ApplicationRecord

    belongs_to :user 

    has_one_attached :photo

    has_many :comments,
       dependent: :destroy

    has_many :likes,
        dependent: :destroy 

    has_many :likers,
        through: :likes,
        source: :user

    
    def liked_by
        self.likers.map { |user| user.id }
    end

    # def user_likes 
    #      array = []
    #     array
    # end

    # def liked
    #     Like.where(user_id: current_user.id, post_id: self.id).present?
    # end

    def like_count
        self.likes.size
    end
end
