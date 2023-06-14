class BidsController < ApplicationController

    # don't need index (offering will pulls bids w nested data)
    def index
        byebug
    end

    def create
        offering = Offering.find_by(id: params[:offering_id])
        bid = offering.bids.new(bid_params)
        current_user.bids << bid
        bid.save!
        render json: bid, status: :created
    end

    def destroy
        #current_user = User.find_by(id: session[:user_id])
        bid = current_user.bids.find_by(id: params[:id])
        bid.destroy
        head :no_content
    end

    def update
        #current_user = User.find_by(id: session[:user_id])
        bid = current_user.bids.find_by(id: params[:id])
        bid.update!(bid_params)
        render json: bid, status: :accepted
    end

    private

    def bid_params
        params.permit(:title, :description, :image_url, :condition, :category_tag, :message)
    end
end
