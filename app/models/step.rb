# frozen_string_literal: true

class Step < ApplicationRecord
  belongs_to :subsection

  validates :content, presence: true
end
