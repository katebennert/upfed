import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import UpdateBid from "./UpdateBid";

function Bid({ bid, onDeleteClick }) {

    const { user } = useContext(UserContext);
    const [isUpdating, setIsUpdating] = useState(false);

return (
    <div key={bid.id} className={bid.user.id === user.id ? "bid-card-pink" : "bid-card"}>
        { isUpdating ? (
            <UpdateBid bid={bid}/>
        ) : (
            <div className="inner-bid-content">
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
                    <button className="bid-edit-button" value={bid.id} onClick={() => setIsUpdating(!isUpdating)}>Edit</button>
                    <button className="bid-delete-button" value={bid.id} onClick={onDeleteClick} >Delete</button>
                </div> 
            :
                <></>
            }
        </div>)
            }
    </div>
)
        

}

export default Bid;