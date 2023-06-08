class OfferingsController < ApplicationController

    def index
        offerings = Offering.all 
        render json: offerings, status: :ok
    end

    def create
        offering = current_user.offerings.create!(offering_params)
        render json: offering, status: :created
        #why is my offering initializing with an empty bid?? i manually set to an empty array for now. the bandaid doesnt work
    end

    private

    def offering_params
        params.permit(:title, :description, :image_url, :condition, :category_tag).merge(user_id: current_user.id)
    end

end
