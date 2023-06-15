import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import UpdateBid from "./UpdateBid";

function Bid({ currentOffering, onUpdateClick, onDeleteClick }) {
    const { user } = useContext(UserContext);
    const [isUpdating, setIsUpdating] = useState(false);
    const [currentBid, setCurrentBid] = useState({});

    function handleUpdateClick(e) {
        setIsUpdating(!isUpdating);
        setCurrentBid(currentOffering.bids.find(bid => bid.id === parseInt(e.target.value)));
    }

return (
    <div className="bids-container">
    {isUpdating ? <UpdateBid currentBid={currentBid} /> :
        <div>{(currentOffering.bids.length !== 0) ? currentOffering.bids.map((bid) => (
            <div key={bid.id} className={bid.user.id === user.id ? "bid-card-pink" : "bid-card"}>
                <div className="bid-left">
                    <img src={bid.image_url} alt={bid.title} />
                </div>
                <div className="bid-right">
                    <p className="bid-title">{bid.title}</p>
                    <p className="bid-username">By: {bid.user.username}</p>
                    <p className="bid-description">{bid.description}</p>
                    <p className="condition-category-tag">Condition: {bid.condition} &nbsp; Category: {bid.category_tag}</p>
                </div>
                {bid.user.id === user.id ? 
                    <div className="bid-edit-delete-buttons">
                        <button className="bid-edit-button" value={bid.id} onClick={handleUpdateClick} >Edit</button>
                        <button className="bid-delete-button" value={bid.id} onClick={onDeleteClick} >Delete</button>
                    </div> 
                :
                    <></>
            }
        </div>
        )) : <div className="no-bids"><p>There are no bids on this item yet!</p></div>
        }
    </div>
    }
    </div>
)

}

export default Bid;