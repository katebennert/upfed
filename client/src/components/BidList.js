import React, { useState } from "react";
import Bid from "./Bid";

function BidList({ currentOffering, onDeleteClick }) {

const [bids, setBids] = useState(currentOffering.bids);

function handleUpdateBid(updatedBid) {
    setBids(bids.map(b => b.id === updatedBid.id ? updatedBid : b))
}

return (
    <div className="bids-container">
        {bids.length !== 0 ? bids.map((bid) => (
            <Bid key={bid.id} onDeleteClick={onDeleteClick} bid={bid} onUpdateBid={handleUpdateBid} />
        ))
        : 
            <div className="no-bids"><p>There are no bids on this item yet!</p></div>
        }
    </div>
)

}

export default BidList;