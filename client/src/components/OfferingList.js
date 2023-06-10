import React from "react";
import { NavLink } from "react-router-dom";

// Update state on bids so that it shows up in the offering list!!!!

function OfferingList({ offerings }) {

    return (
        <div className="offering-card-container"> 
            {(offerings.length > 0 && offerings !== []) ? (
                offerings.map((offering) => (
                    <div key={offering.id} className="offering-card">
                        <div className="offering-card-left">
                            <h2 className="offering-title">{offering.title}</h2>
                            <p>listed by: {offering.user.username}</p>
                            <img src={offering.image_url} alt={offering.title}/>
                        </div>
                        <div className="offering-info">
                            <p className="offering-description">Description: {offering.description}</p>
                            <p className="offering-condition">Condition: {offering.condition}</p>
                            <p className="offering-category-tag">Category: {offering.category_tag}</p>
                            <p>Bids on this offer: {offering.bids.length}</p>
                        </div>
                        <div className="offering-card-buttons">
                            <NavLink to={`/offerings/${offering.id}`}><button>View Offering</button></NavLink>
                        </div>
                    </div>
                ))
            ) : (
                <>
                    <h2>No Offerings Found</h2>
                    <NavLink to={`/new-offering`}><button>Make a New Offering</button></NavLink>
                </>
            )}
        </div>
    )
}

export default OfferingList;