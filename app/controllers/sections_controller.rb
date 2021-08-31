# frozen_string_literal: true

class SectionsController < ApplicationController
  def create
    @section = Section.new(section_params)
    if @section.save
      render status: :ok, json: { notice: t("section.created") }
    else
      errors = @section.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def index
    sections = Section.all
    render status: :ok, json: { sections: sections }
    end

  def section_params
    params.require(:section).permit(:name)
  end
end
