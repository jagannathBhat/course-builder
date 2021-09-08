# frozen_string_literal: true

class SubsectionsController < ApplicationController
  before_action :load_subsection, only: %i[destroy update]

  def create
    @subsection = Subsection.new(subsection_params)
    if @subsection.save
      render status: :ok, json: { notice: t("successfuly_created", entity: "subsection") }
    else
      errors = @subsection.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def destroy
    if @subsection.destroy
      render status: :ok, json: { notice: t("successfuly_deleted", entity: "subsection") }
    else
      errors = @subsection.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def index
    subsections = Subsection.all
    render status: :ok, json: { subsections: subsections }
  end

  def update
    if @subsection.update(subsection_params)
      render status: :ok, json: { notice: t("successfuly_updated", entity: "subsection") }
    else
      render status: :unprocessable_entity, json: { errors: @subsection.errors.full_messages.to_sentence }
    end
  end

  private

    def load_subsection
      @subsection = Subsection.find_by_id!(params[:id])
    rescue ActiveRecord::RecordNotFound => errors
      render json: { errors: errors }
    end

    def subsection_params
      params.require(:subsection).permit(:name, :section_id, :script)
    end
end
