# frozen_string_literal: true

Rails.application.routes.draw do
  resources :sections, only: %i[create destroy index update], param: :id
  resources :steps, only: %i[create destroy index update], param: :id
  resources :subsections, only: %i[create destroy index update], param: :id

  root "home#index"
  get "*path", to: "home#index", via: :all
end
