class OfferingsController < ApplicationController

    def index
        offerings = Offering.all 
        render json: offerings, status: :ok
    end

    def create
        user = User.find_by(id: session[user_id])
        offering = user.offerings.create!(offering_params)
        render json: offering, status: :created
    end

    def show
        offering = Offering.find_by(id: params[:id])
        if offering
            render json: offering
        else 
            render json: { error: "Offering not found" }, status: :not_found
        end
    end

    private

    def offering_params
        params.permit(:title, :description, :image_url, :condition, :category_tag)
    end

end
