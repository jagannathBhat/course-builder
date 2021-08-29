# frozen_string_literal: true

class CreateSubsections < ActiveRecord::Migration[6.1]
  def change
    create_table :subsections do |t|
      t.string :name
      t.text :script
      t.timestamps
    end
  end
end
