# frozen_string_literal: true

class CreateSteps < ActiveRecord::Migration[6.1]
  def change
    create_table :steps do |t|
      t.string :content
      t.timestamps
    end
  end
end
