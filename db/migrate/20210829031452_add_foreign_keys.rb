# frozen_string_literal: true

class AddForeignKeys < ActiveRecord::Migration[6.1]
  def change
    add_reference :subsections, :section, foreign_key: { on_delete: :cascade }, index: false
    add_reference :steps, :subsection, foreign_key: { on_delete: :cascade }, index: false
  end
end
