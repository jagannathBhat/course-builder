# frozen_string_literal: true

require "test_helper"

class SubsectionsControllerTest < ActionDispatch::IntegrationTest
  def setup
    @section = create(:section)
    @subsection = create(:subsection, section: @section)
  end

  def test_should_list_all_subsections
    get subsections_path
    response_body = response.parsed_body
    assert_equal response_body["subsections"], [@subsection.as_json]
  end

  def test_should_create_valid_subsection
    post subsections_path, params: { subsection: { name: "Introduction to Ruby", section_id: @section.id } }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_created", entity: "subsection")
  end

  def test_shouldnt_create_subsection_without_name
    post subsections_path, params: { subsection: { section_id: @section.id } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Name can't be blank"
  end

  def test_shouldnt_create_subsection_without_section_id
    post subsections_path, params: { subsection: { name: "Introduction to Ruby" } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Section must exist"
  end

  def test_should_update_subsection
    put subsection_path(@subsection.id), params: { subsection: { name: "Introduction to Rails" } }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_updated", entity: "subsection")
  end

  def test_shouldnt_update_subsection_without_name
    put subsection_path(@subsection.id), params: { subsection: { name: "" } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Name can't be blank"
  end

  def test_shouldnt_update_subsection_with_blank_section
    put subsection_path(@subsection.id), params: { subsection: { section_id: nil } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Section must exist"
  end

  def test_should_delete_subsection
    delete subsection_path(@subsection.id)
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_deleted", entity: "subsection")
  end

  def test_shouldnt_delete_invalid_subsection
    delete subsection_path(@subsection.id + 1000)
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Couldn't find Subsection"
  end
end
