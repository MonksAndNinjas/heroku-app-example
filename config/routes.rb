Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :countries
      resources :posts
      resources :projects
      resources :profiles
    end
  end
end
