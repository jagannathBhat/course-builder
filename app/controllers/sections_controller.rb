# frozen_string_literal: true

class SectionsController < ApplicationController
  before_action :load_section, only: %i[destroy update]

  def create
    @section = Section.new(section_params)
    if @section.save
      render status: :ok, json: { notice: t("section.created") }
    else
      errors = @section.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def destroy
    if @section.destroy
      render status: :ok, json: { notice: t("section.deleted") }
    else
      errors = @section.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def index
    sections = Section.all
    render status: :ok, json: { sections: sections }
  end

  def update
    if @section.update(section_params)
      render status: :ok, json: { notice: t("section.updated") }
    else
      render status: :unprocessable_entity, json: { errors: @section.errors.full_messages.to_sentence }
    end
  end

  private

    def load_section
      @section = Section.find_by_id!(params[:id])
    rescue ActiveRecord::RecordNotFound => errors
      render json: { errors: errors }
    end

    def section_params
      params.require(:section).permit(:name)
    end
end
