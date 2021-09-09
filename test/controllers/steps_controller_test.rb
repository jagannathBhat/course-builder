# frozen_string_literal: true

require "test_helper"

class StepsControllerTest < ActionDispatch::IntegrationTest
  def setup
    @section = create(:section)
    @subsection = create(:subsection, section: @section)
    @step = create(:step, subsection: @subsection)
  end

  def test_should_list_all_steps
    get steps_path
    response_body = response.parsed_body
    assert_equal response_body["steps"], [@step.as_json]
  end

  def test_should_create_valid_step
    post steps_path, params: { step: { content: "Introduction to Ruby", subsection_id: @subsection.id } }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_created", entity: "step")
  end

  def test_shouldnt_create_step_without_content
    post steps_path, params: { step: { subsection_id: @subsection.id } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Content can't be blank"
  end

  def test_shouldnt_create_step_without_subsection_id
    post steps_path, params: { step: { content: "Introduction to Ruby" } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Subsection must exist"
  end

  def test_should_update_step
    put step_path(@step.id), params: { step: { content: "Introduction to Rails" } }
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_updated", entity: "step")
  end

  def test_shouldnt_update_step_without_content
    put step_path(@step.id), params: { step: { content: "" } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Content can't be blank"
  end

  def test_shouldnt_update_step_with_blank_subsection
    put step_path(@step.id), params: { step: { subsection_id: nil } }
    assert_response :unprocessable_entity
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Subsection must exist"
  end

  def test_should_delete_step
    delete step_path(@step.id)
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["notice"], t("successfuly_deleted", entity: "step")
  end

  def test_shouldnt_delete_invalid_step
    delete step_path(@step.id + 1000)
    assert_response :success
    response_json = response.parsed_body
    assert_equal response_json["errors"], "Couldn't find Step"
  end
end
