import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function OfferingPage({ offerings }) {

    const { id } = useParams();
    const [currentOffering, setCurrentOffering] = useState({});

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
        </div>
    );
}

export default OfferingPage;
