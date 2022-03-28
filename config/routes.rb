Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :index, :create, :update, :destroy ]
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :pictures, only: [:show, :index, :create, :destroy]
    resources :comments, only: [:show, :index, :create, :destroy] 
  end
end
