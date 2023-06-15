import { useState } from "react";
import { useHistory } from "react-router";

function NewOffering({ offerings, setOfferings }) {
   
    const [newOffering, setNewOffering] = useState({
        title: "",
        description: "",
        image_url: "",
        condition: "",
        category_tag: ""
    });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleChange(e) {
        const id = e.target.id;
        let value = e.target.value;

        setNewOffering({
            ...newOffering,
            [id]: value
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/offerings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newOffering),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then(newOfferingData => {
                    setOfferings([...offerings, newOfferingData]);
                    history.push("/offerings")
            });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

  return (
    <>
    <h2>Make a New Offering</h2>
    <div className="create-offering-form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                type="text"
                id="title"
                value={newOffering.title}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                type="text"
                id="description"
                value={newOffering.description}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
                <label htmlFor="image_url">Image URL</label>
                <input
                type="text"
                id="image_url"
                value={newOffering.image_url}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
                <label htmlFor="condition">Condition</label>
                <select
                    type="select-one"
                    id="condition"
                    value={newOffering.condition}
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
                    value={newOffering.category_tag}
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
            <button className="create-offering-submit-button" type="submit">
              {isLoading ? "Loading..." : "Submit Offering"}
            </button>
          </div>
          </form>
          <div>
            {errors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>

      </div>
      </>
  );
}

export default NewOffering;
