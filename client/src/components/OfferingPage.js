import React, { useState, useEffect, useContext } from "react";
import NewBid from "./NewBid";
import Bid from "./Bid";
import { UserContext } from "../context/user";
import { useParams } from "react-router-dom";

function OfferingPage({ offerings }) {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    const [currentOffering, setCurrentOffering] = useState(null);
    const [showNewBid, setShowNewBid] = useState(false);

    useEffect(() => {
        const offering = offerings.find(o => o.id === parseInt(id));
        setCurrentOffering(offering);
    }, [id, offerings]);

    function handleSubmitNewBid(newBid) {
        setCurrentOffering({...currentOffering, bids: [...currentOffering.bids, newBid]})
        setShowNewBid(!showNewBid);
    }

    function handleDeleteClick(e) {
        const bidId = parseInt(e.target.value);
        const filteredBids = currentOffering.bids.filter(bid => bid.id !== bidId)
        fetch(`/bids/${bidId}`, {
          method: "DELETE",
        })
        .then(setCurrentOffering({...currentOffering, bids: filteredBids}))
    }

    return (
        <div>
            <div>{currentOffering ? currentOffering.title : ""}</div>
            <Bid currentOffering={currentOffering} onDeleteClick={handleDeleteClick}/>
            <button onClick={() => setShowNewBid(!showNewBid)} >Request a Trade!</button>
            <div>
                { showNewBid ? <NewBid currentOffering={currentOffering} onSubmitNewBid={handleSubmitNewBid}/> : <></>}
            </div>
        </div>
    );
}

export default OfferingPage;
