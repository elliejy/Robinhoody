Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy, :show]
    resource :watchlist, only: [:show, :create, :destroy]
    resources :users, only: [:create, :show]
      get '/users/:id/info', to: 'users#info'
      get '/users/:id/watchlist', to: 'users#watchlist'
    resources :companies, only:[:index, :show]
  end

  root to: "static_pages#root"
end
