# frozen_string_literal: true

class SubsectionsController < ApplicationController
  def create
    @subsection = Subsection.new(subsection_params)
    if @subsection.save
      render status: :ok, json: { notice: t("subsection.created") }
    else
      errors = @subsection.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def index
    subsections = Subsection.all
    render status: :ok, json: { subsections: subsections }
  end

  def subsection_params
    params.require(:subsection).permit(:name, :section_id)
  end
end
