import { useState } from "react";

function NewBid({ currentOffering, onSubmitNewBid }) {
   
    const [newBid, setNewBid] = useState({
        title: "",
        description: "",
        image_url: "",
        condition: "",
        category_tag: "",
        message: "",
        offering_id: currentOffering.id
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        const name = e.target.id;
        let value = e.target.value;

        setNewBid({
            ...newBid,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/bids", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBid),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((bidData) => onSubmitNewBid(bidData));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

  return (
    <div className="new-bid-spacer">
    <div className="new-bid-form-container">
        <h2>Create Bid</h2>
        <div className="inner-bid-form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                type="text"
                id="title"
                value={newBid.title}
                onChange={handleChange}
            />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                type="text"
                id="description"
                value={newBid.description}
                onChange={handleChange}
            />
            </div>

            <div className="form-group">
                <label htmlFor="image_url">Image URL</label>
                <input
                type="text"
                id="image_url"
                value={newBid.image_url}
                onChange={handleChange}
            />
            </div>

            <div className="form-group">
                <label htmlFor="condition">Condition</label>
                <select
                    type="select-one"
                    id="condition"
                    value={newBid.condition}
                    onChange={handleChange}
                >
                    <option value="">-Select One-</option>
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
                    id="category_tag"
                    value={newBid.category_tag}
                    onChange={handleChange}
                >
                    <option value="">-Select One-</option>
                    <option>Clothing</option>
                    <option>Toys and Games</option>
                    <option>Books and Comics</option>
                    <option>Sports Equipment</option>
                    <option>Newborn and Babies</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message the Trader:</label>
                <input
                type="text"
                id="message"
                value={newBid.message}
                onChange={handleChange}
            />
            </div>

            <div className="new-bid-button-container">
                <button type="submit">
                    {isLoading ? "Loading..." : "Submit Bid"}
                </button>
            </div>

            <div className="new-bid-errors-container">
                {errors.map((err) => (
                    <p key={err} className="errors-container" >{err}</p>
                ))}
            </div>
         </form>
         </div>
      </div>
      </div>
  );
}

export default NewBid;
