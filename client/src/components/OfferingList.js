import React from "react";
import { NavLink } from "react-router-dom";

function OfferingList({ offerings }) {

    return (
        <> 
            {offerings.length > 0 ? (
                offerings.map((offering) => (
                    <div key={offering.id}>
                        <h3>{offering.title}</h3>
                        <p>listed by: {offering.user.username}</p>
                        <img src={offering.image_url} alt={offering.title}/>
                        <p>Description: {offering.description}</p>
                        <p>Condition: {offering.condition}</p>
                        <p>Category: {offering.category_tag}</p>
                        <NavLink to={`/offerings/${offering.id}`}><button>View Offering</button></NavLink>
                    </div>
                ))
            ) : (
                <>
                    <h2>No Offerings Found</h2>
                    <NavLink to={`/new`}><button>Make a New Offering</button></NavLink>
                </>
            )}
        </>
    )
}

export default OfferingList;