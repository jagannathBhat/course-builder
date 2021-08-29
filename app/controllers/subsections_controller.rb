# frozen_string_literal: true

class SubsectionsController < ApplicationController
  def index
    subsections = Subsection.all
    render status: :ok, json: { subsections: subsections }
  end
end
