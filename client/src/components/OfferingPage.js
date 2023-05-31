import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import NewBid from "./NewBid";
import { UserContext } from "../context/user";
// import { useHistory } from "react-router-dom";

function OfferingPage({ offerings }) {
    const { user, setUser } = useContext(UserContext);
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

    function handleViewBidClick(e) {
        console.log(e.target.value)
    }

    // const history = useHistory();


    // const handleDeleteClick = () => {
    //     fetch(`http://localhost:9292/jobs/${id}`, {
    //       method: "DELETE",
    //     })
    //         .then(r => r.json())
    //         .then(deletedJob => {
    //             onDeleteJob(deletedJob, job.freelancers);
    //             history.push("/jobs");
    //         })
    // }

    return (
        <div>
            <div>{currentOffering ? currentOffering.title : ""}</div>
            <div>{currentOffering ? currentOffering.bids.map((bid) => (
                    <div key={bid.id}>
                        <p>{bid.title}</p>
                        <p>{bid.user.username}</p>
                        {bid.user.id === user.id ? 
                            <div>
                                <button value={bid.id} onClick={handleViewBidClick} >Edit Bid</button>
                                <button value={bid.id} onClick={handleViewBidClick} >Delete Bid</button>
                            </div> 
                        :
                            <></>
                        }
                    </div>
                    )) : <></>
                }
            </div>
            <button onClick={() => setShowNewBid(!showNewBid)} >Request a Trade!</button>
            <div>
                { showNewBid ? <NewBid currentOffering={currentOffering} onSubmitNewBid={handleSubmitNewBid}/> : <></>}
            </div>
        </div>
    );
}

export default OfferingPage;
