# frozen_string_literal: true

Rails.application.routes.draw do
  resources :sections, only: :index
  resources :subsections, only: :index

  root "home#index"
  get "*path", to: "home#index", via: :all
end
