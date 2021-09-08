# frozen_string_literal: true

require "test_helper"

class StepTest < ActiveSupport::TestCase
  def setup
    @section = create(:section)
    @subsection = create(:subsection, section: @section)
    @step = create(:step, subsection: @subsection)
  end

  def test_step_should_have_column_by_default
    assert_equal @step.column, 1
  end

  def test_step_should_not_be_valid_and_saved_without_name
    @step.content = nil
    assert_not @step.valid?
    assert_includes @step.errors.full_messages, "Content can't be blank"
  end

  def test_step_should_not_be_valid_and_saved_without_section_id
    @step.subsection = nil
    assert_not @step.valid?
    assert_includes @step.errors.full_messages, "Subsection must exist"
  end
end
