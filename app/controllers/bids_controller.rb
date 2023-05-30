class BidsController < ApplicationController

    # don't need index (offering will pulls bids w nested data)
    def index
        byebug
    end

    def create
        offering = Offering.find_by(id: params[:offering_id])
        current_user = User.find_by(id: session[:user_id])
        bid = offering.bids.new(bid_params)
        current_user.bids << bid
        bid.save!
        render json: bid, status: :created
    end

    private

    def bid_params
        params.permit(:title, :description, :image_url, :condition, :category_tag, :message, :offering_id)
    end
end
