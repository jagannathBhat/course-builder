# frozen_string_literal: true

require "test_helper"

class SectionsControllerTest < ActionDispatch::IntegrationTest
  def setup
    @section = create(:section)
  end

  def test_should_list_all_sections
    get sections_path
    response_body = response.parsed_body
    assert_equal response_body["sections"], [@section.as_json]
  end

  def test_should_create_valid_section
    post sections_path, params: { section: { name: "Introduction" } }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_created", entity: "section")
  end

  def test_shouldnt_create_section_without_name
    post sections_path, params: { section: { name: "" } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Name can't be blank"
  end

  def test_should_update_section
    put section_path(@section.id), params: { section: { name: "Introduction" } }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_updated", entity: "section")
  end

  def test_shouldnt_update_section_without_name
    put section_path(@section.id), params: { section: { name: "" } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Name can't be blank"
  end

  def test_should_delete_section
    delete section_path(@section.id)
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_deleted", entity: "section")
  end
end
