class OfferingsController < ApplicationController

    def index
        offerings = Offering.all 
        render json: offerings, status: :ok
    end

    def create
        current_user = User.find_by(id: session[:user_id])
        offering = current_user.offerings.create!(offering_params)
        render json: offering, status: :created
    end

    private

    def offering_params
        params.permit(:title, :description, :image_url, :condition, :category_tag)
    end

end
