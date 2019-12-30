Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :index, :destroy]  
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :show, :update, :destroy] do 
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create,:destroy,:show]

    get 'profile/posts/:id', :to => 'posts#profile_posts'
  end
   
end
