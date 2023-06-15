import React, { useState } from "react";

function UpdateBid({ bid, onUpdateBid, isUpdating, setIsUpdating }) {

    const [updatedBid, setUpdatedBid] = useState({
        title: bid.title,
        description: bid.description,
        image_url: bid.image_url,
        condition: bid.condition,
        category_tag: bid.category_tag,
        message: bid.message,
        offering_id: bid.offering_id
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleUpdateBidSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/bids/${bid.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedBid),
            }).then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json().then((bidData) => {
                        onUpdateBid(bidData)
                        setIsUpdating(false)
                    }
                        );
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            });

        }

        function handleChange(e) {
            const name = e.target.name;
            let value = e.target.value;
    
            setUpdatedBid({
                ...updatedBid,
                [name]: value
            });
        }

    return (
        <div className="update-bid-container">
            <form onSubmit={handleUpdateBidSubmit} className="update-form">
                <div className="inner-bid-content">
                    <div className="bid-left">
                        <img src={bid.image_url} alt={bid.title} />
                    </div>
                    <div className="bid-right-update">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input 
                                type="text"
                                name="title"
                                autoComplete="off"
                                value={updatedBid.title}
                                onChange={handleChange}
                                className="bid-title" 
                            />
                        </div>

                        <p className="bid-username">By: {bid.user.username}</p>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input 
                                type="text"
                                name="description"
                                autoComplete="off"
                                value={updatedBid.description}
                                onChange={handleChange}
                                className="bid-description" 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="condition">Condition</label>
                            <select
                                type="select-one"
                                name="condition"
                                value={updatedBid.condition}
                                onChange={handleChange}
                            >
                                <option value={bid.condition}>{bid.condition}</option>
                                <option>Used</option>
                                <option>Gently-used</option>
                                <option>Good</option>
                                <option>Very Good</option>
                                <option>Brand New</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category_tag">Select a Category</label>
                            <select
                                type="select-one"
                                name="category_tag"
                                value={updatedBid.category_tag}
                                onChange={handleChange}
                            >
                                <option value={bid.category_tag}>{bid.category_tag}</option>
                                <option>Clothing</option>
                                <option>Toys and Games</option>
                                <option>Books and Comics</option>
                                <option>Sports Equipment</option>
                                <option>Newborn and Babies</option>
                            </select>
                        </div>
                    </div>
                    <div className="bid-save-error-container">
                        <button className="bid-save-button" type="submit">{isLoading ? "Loading..." : "Save"}</button>
                        <div className="errors-container">
                            {errors.map((err) => (
                                <p key={err}>{err}</p>
                            ))}
                        </div>
                    </div> 
                </div>
            </form>
        </div>    
    )
}

export default UpdateBid;