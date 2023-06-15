import React, { useState, useEffect } from "react";
import NewBid from "./NewBid";
import BidList from "./BidList";
//import { UserContext } from "../context/user";
import { useParams } from "react-router-dom";

// use context for current offering????

function OfferingPage({ offerings }) {
    //const { user } = useContext(UserContext);
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
        <>
            {currentOffering ? (
            <div className="offering-page-container">
                <div className="offering-container">
                    <img className="offering-image" src={currentOffering.image_url} alt={currentOffering.title}/>
                    <div className="offering-right">
                        <h1> {currentOffering.title} </h1>
                        <p className="username">posted by: {currentOffering.user.username}</p>
                        <p className="bid-number">🔥 {currentOffering.bids.length} {currentOffering.bids.length === 1 ? "user has" : "users have"} bid on this item</p>
                        <p className="description">{currentOffering.description}</p>
                        <p className="condition">Condition: {currentOffering.condition}</p>
                        <p className="category">Category: {currentOffering.category_tag}</p>
                        <div className="btn-container">
                            <button className="submit-bid-btn" onClick={() => setShowNewBid(!showNewBid)} >Submit a Bid!</button>
                        </div>
                    </div>
                </div>
                <div className="bid-container">
                    {showNewBid ? <NewBid currentOffering={currentOffering} onSubmitNewBid={handleSubmitNewBid}/> : <></>}
                    <BidList currentOffering={currentOffering} onDeleteClick={handleDeleteClick} />
                </div>
            </div>

            ) : (

            <div className="not-found-container">
                Offering not found!
            </div>
            )
            }
        </>
    );
}

export default OfferingPage;
