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
    <>{isUpdating ? <UpdateBid currentBid={currentBid} /> :
    <div>{currentOffering ? currentOffering.bids.map((bid) => (
        <div key={bid.id}>
            <p>{bid.title}</p>
            <p>{bid.user.username}</p>
            {bid.user.id === user.id ? 
                <div>
                    <button value={bid.id} onClick={handleUpdateClick} >Edit Bid</button>
                    <button value={bid.id} onClick={onDeleteClick} >Delete Bid</button>
                </div> 
                :
                <></>
            }
        </div>
        )) : <></>
        }
    </div>
}
    </>
)

}

export default Bid;