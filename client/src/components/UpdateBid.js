//import React, { useState } from "react";

function UpdateBid({ currentBid }) {

    console.log(currentBid)

    // function handleUpdateSubmit(e) {
    //     e.preventDefault();
        
    //     fetch(`/bids/${freelancer.id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(updatedFreelancer),
    //         })
    //             .then(r => r.json())
    //             .then(updatedFreelancerData => {
    //                 onUpdateFreelancerSave(updatedFreelancerData)
    //             })

    //     setIsUpdating(false);
        
    // }

    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     let value = e.target.value;

    //     if (e.target.type === "checkbox") {
    //         value = e.target.checked
    //     }

    //     setUpdatedFreelancer({
    //         ...updatedFreelancer,
    //         [name]: value
    //     });
    // }

    return (
        <div>
            editing
        </div>    
    )
}

export default UpdateBid;