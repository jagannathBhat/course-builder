# frozen_string_literal: true

class Step < ApplicationRecord
  belongs_to :subsections

  validates :content, presence: true
end
