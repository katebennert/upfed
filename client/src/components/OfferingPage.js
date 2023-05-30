import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewBid from "./NewBid";
// import { useHistory } from "react-router-dom";

function OfferingPage({ offerings }) {

    const { id } = useParams();
    const [currentOffering, setCurrentOffering] = useState({});
    const [showNewBid, setShowNewBid] = useState(false);

    useEffect(() => {
        const offering = offerings.find(o => o.id === parseInt(id));
        setCurrentOffering(offering)
    }, [id, offerings]);

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
            <div>{currentOffering.title}</div>
            <button onClick={() => setShowNewBid(!showNewBid)} >Request a Trade!</button>
            <div>
                { showNewBid ? <NewBid currentOffering={currentOffering} /> : <></>}
            </div>
        </div>
    );
}

export default OfferingPage;
