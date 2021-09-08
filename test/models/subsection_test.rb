# frozen_string_literal: true

require "test_helper"

class SubsectionTest < ActiveSupport::TestCase
  def setup
    @section = create(:section)
    @subsection = create(:subsection, section: @section)
  end

  def test_subsection_should_not_be_valid_and_saved_without_name
    @subsection.name = nil
    assert_not @subsection.valid?
    assert_includes @subsection.errors.full_messages, "Name can't be blank"
  end

  def test_subsection_should_not_be_valid_and_saved_without_section_id
    @subsection.section = nil
    assert_not @subsection.valid?
    assert_includes @subsection.errors.full_messages, "Section must exist"
  end
end
