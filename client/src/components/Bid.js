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
            <div key={bid.id} className="bid-card">
                <p className="bid-title">{bid.title}</p>
                <p className="bid-username">{bid.user.username}</p>
                {bid.user.id === user.id ? 
                    <div className="bid-edit-delete-buttons">
                        <button value={bid.id} onClick={handleUpdateClick} >Edit Bid</button>
                        <button value={bid.id} onClick={onDeleteClick} >Delete Bid</button>
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