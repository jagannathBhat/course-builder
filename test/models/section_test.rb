# frozen_string_literal: true

require "test_helper"

class SectionTest < ActiveSupport::TestCase
  def setup
    @section = create(:section)
  end

  def test_section_should_not_be_valid_and_saved_without_name
    @section.name = nil
    assert_not @section.valid?
    assert_includes @section.errors.full_messages, "Name can't be blank"
  end
end
