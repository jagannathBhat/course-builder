# frozen_string_literal: true

FactoryBot.define do
  factory :step do
    content { Faker::Lorem.sentence[0..49] }
  end
end
