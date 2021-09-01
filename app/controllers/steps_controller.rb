# frozen_string_literal: true

class StepsController < ApplicationController
  before_action :load_step, only: %i[destroy update]

  def create
    @step = Step.new(step_params)
    if @step.save
      render status: :ok, json: { notice: t("step.created") }
    else
      errors = @step.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def destroy
    if @step.destroy
      render status: :ok, json: { notice: t("step.deleted") }
    else
      errors = @step.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def index
    steps = Step.all
    render status: :ok, json: { steps: steps }
  end

  def update
    if @step.update(step_params)
      render status: :ok, json: { notice: t("step.updated") }
    else
      render status: :unprocessable_entity, json: { errors: @step.errors.full_messages.to_sentence }
    end
  end

  private

    def load_step
      @step = Step.find_by_id!(params[:id])
    rescue ActiveRecord::RecordNotFound => errors
      render json: { errors: errors }
    end

    def step_params
      params.require(:step).permit(:content, :column, :subsection_id)
    end
end
