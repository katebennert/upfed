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

        if (e.target.type === "select-one") {
            value = Number(value)
        }

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
    <div>
      <div>
        <h2>Create Bid</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                type="text"
                id="title"
                value={newBid.title}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                type="text"
                id="description"
                value={newBid.description}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="image_url">Image URL</label>
                <input
                type="text"
                id="image_url"
                value={newBid.image_url}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="condition">Condition</label>
                <input
                type="text"
                id="condition"
                value={newBid.condition}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="category_tag">Select a Category</label>
                <input
                type="text"
                id="category_tag"
                value={newBid.category_tag}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="message">Message the Trader:</label>
                <input
                type="text"
                id="message"
                value={newBid.message}
                onChange={handleChange}
            />
            </div>
            <div>
            <button type="submit">
              {isLoading ? "Loading..." : "Submit Offering"}
            </button>
          </div>
          <div>
            {errors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>
         </form>

      </div>
    </div>
  );
}

export default NewBid;
