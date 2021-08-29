# frozen_string_literal: true

class Subsection < ApplicationRecord
  belongs_to :sections
  has_many :steps, dependent: :destroy

  validates :name, presence: true
end
