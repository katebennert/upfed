import React from "react";
import Bid from "./Bid";

function BidList({ currentOffering, onDeleteClick }) {

return (
    <div className="bids-container">
        {currentOffering.bids.length !== 0 ? currentOffering.bids.map((bid) => (
            <Bid key={bid.id} onDeleteClick={onDeleteClick} bid={bid}/>
        ))
        : 
            <div className="no-bids"><p>There are no bids on this item yet!</p></div>
        }
    </div>
)

}

export default BidList;