json.extract! post, :id, :user_id, :body, :created_at
json.author post.user.username