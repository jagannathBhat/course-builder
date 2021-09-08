# frozen_string_literal: true

FactoryBot.define do
  factory :section do
    name { Faker::Lorem.sentence[0..49] }
  end
end
