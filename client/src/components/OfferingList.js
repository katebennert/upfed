import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// Update state on bids so that it shows up in the offering list!!!!

function OfferingList({ offerings, setOfferings }) {

    useEffect(() => {
        fetch("/offerings")
            .then((r) => {
            if (r.ok) {
                r.json().then((offerings) => {
                    
                    setOfferings(offerings)
                });
            } else {
                r.json().then((err) => console.log(err.errors));
            }
        });
    }, [setOfferings]);

    return (
        <div className="offering-card-container"> 
            {offerings.map((offering) => (
                    <div key={offering.id} className="offering-card">
                        <div className="offering-card-top">
                            <h2 className="offering-title">{offering.title}</h2>
                            <p className="listed-by">listed by: {offering.user.username}</p>
                        </div>
                        <div className="offering-card-middle">
                            <img src={offering.image_url} alt={offering.title}/>
                            <p className="offering-description">{offering.description}</p>
                        </div>
                        <div className="offering-card-bottom">
                            <p className="offering-condition"><strong>Condition:</strong> {offering.condition}</p>
                            <p className="offering-category-tag"><strong>Category:</strong> {offering.category_tag}</p>
                            <p><strong>Bids on this offer:</strong> {offering.bids.length}</p>
                        </div>
                        <div className="offering-btn-container">
                            <NavLink to={`/offerings/${offering.id}`} className="view-offering-nav">
                                <button className="view-offering-button" value={offering.id}>View Offering</button>
                            </NavLink>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default OfferingList;