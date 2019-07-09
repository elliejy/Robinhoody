Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy, :show]
    resources :companies, only:[:index, :show]
    resources :users, only: [:create, :show] do
      get '/users/:id/info', to: 'users#info'
      get '/users/:id/watchlist', to: 'users#watchlist'
      resource :watchlist, only: [:show, :create, :destroy]
    end
    
  end

  root to: "static_pages#root"
end
