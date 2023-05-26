class OfferingsController < ApplicationController

    def index
        offerings = Offering.all 
        render json: offerings, include: :user, status: :ok
    end

    # def create
    #     user = User.find_by(id: session[user_id])
    #     offering = user.offerings.create!(offering_params)
    #     render json: offering, status: :created
    # end

    # private

    # def offering_params
    #     params.permit(:title, :description, :image_url, :condition, :category_tag)
    # end

end
