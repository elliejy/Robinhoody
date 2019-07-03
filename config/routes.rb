Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :sesison 
  resource :watchlist
  resources :users

  root "static_pages#root"
end
