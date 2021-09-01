# frozen_string_literal: true

class AddColumnToSteps < ActiveRecord::Migration[6.1]
  def change
    add_column :steps, :column, :integer, default: 1
  end
end
