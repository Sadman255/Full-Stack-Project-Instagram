json.extract! user, :id, :username, :email, :bio

json.followerIds user.followers.pluck(:id)
json.followingIds user.followings.pluck(:id)