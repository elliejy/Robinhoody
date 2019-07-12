Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    get '/search', to: 'search#search'
    resource :session, only: [:create, :destroy, :show]
    resources :companies, only:[:index, :show]
     get '/companies/:ticker', to: 'company#show'
    resources :users, only: [:create, :show] do
      get '/users/:id/info', to: 'users#info'
      # get '/users/:id/watchlists', to: 'users#watchlists'
      resources :watchlists, only: [:show,  :update]
    end
    resources :watchlists, only: [:create,:destroy, :index]
  end
  root to: "static_pages#root"
end
