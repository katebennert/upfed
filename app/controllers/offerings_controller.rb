class OfferingsController < ApplicationController

    def index
        offerings = Offering.all 
        render json: offerings, status: :ok
    end

    def create
       # byebug
        offering = Offering.create!(offering_params)
        render json: offering, status: :created
    end

    private

    def offering_params
        params.permit(:title, :description, :image_url, :condition, :category_tag).merge(user_id: current_user.id)
    end

end
