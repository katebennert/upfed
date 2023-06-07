class OfferingsController < ApplicationController

    def index
        offerings = Offering.all 
        render json: offerings, status: :ok
    end

    def create
        puts current_user.id
        offering = current_user.offerings.create!(offering_params)
        # current user returns the correct user in the console but for some reason throws an error that it does not exist and if i remove the exception, the user info will populate with nil
        render json: offering, status: :created
    end

    private

    def offering_params
        params.require(:offering).permit(:title, :description, :image_url, :condition, :category_tag).merge(user_id: current_user.id)
    end

end
