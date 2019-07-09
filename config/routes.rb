Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy, :show]
    resources :companies, only:[:index, :show]
     get '/companies/:ticker', to: 'company#show'
    resources :users, only: [:create, :show] do
      get '/users/:id/info', to: 'users#info'
      get '/users/:id/watchlists', to: 'users#watchlists'
      resources :watchlists, only: [:show, :destroy]
    end
    resources :watchlists, only: [:create]

  root to: "static_pages#root"
end
