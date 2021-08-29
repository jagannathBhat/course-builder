# frozen_string_literal: true

class Section < ApplicationRecord
  has_many :subsections, dependent: :destroy

  validates :name, presence: true
end
