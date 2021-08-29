# frozen_string_literal: true

class AddForeignKeys < ActiveRecord::Migration[6.1]
  def change
    add_reference :sections, :subsections, foreign_key: true
    add_reference :subsections, :steps, foreign_key: true
  end
end
