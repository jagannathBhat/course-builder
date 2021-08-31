# frozen_string_literal: true

Rails.application.routes.draw do
  resources :sections, only: %i[create index]
  resources :subsections, only: %i[create index]

  root "home#index"
  get "*path", to: "home#index", via: :all
end
