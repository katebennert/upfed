class BidsController < ApplicationController

    # don't need index (offering will pulls bids w nested data)

    def create
        offering = Offering.find_by(id: params[:offering_id])
        bid = offering.bids.new(bid_params)
        current_user.bids << bid
        bid.save!
        render json: bid, status: :created
    end

    def destroy
        bid = current_user.bids.find_by(id: params[:id])
        # do i need the below if I can just use a record not found rescue?
        if bid
            bid.destroy
            head :no_content
        else 
            head :no_content, status: :unauthorized
        end
    end

    def update
        bid = current_user.bids.find_by(id: params[:id])
        if bid
            bid.update!(bid_params)
            render json: bid, status: :accepted
        else
            head :no_content, status: :unauthorized
        end
    end

    private

    def bid_params
        params.permit(:title, :description, :image_url, :condition, :category_tag, :message)
    end
end
