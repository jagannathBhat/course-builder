# frozen_string_literal: true

class SectionsController < ApplicationController
  def index
    sections = Section.all
    render status: :ok, json: { sections: sections }
  end
end
