import { useState } from "react";
import { useHistory } from "react-router";

function NewOffering({ onCreateNewOffering }) {
   
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

        if (e.target.type === "select-one") {
            value = Number(value)
        }

        setNewOffering({
            ...newOffering,
            [id]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(newOffering)
        setIsLoading(true);
        fetch("/offerings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newOffering),
        }).then((r) => {
            setIsLoading(false);
            console.log(newOffering)
            console.log(r)
            if (r.ok) {
                r.json().then(newOfferingData => {
                    onCreateNewOffering(newOfferingData)
                    history.push("/offerings")
            });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

  return (
    <div>
      <div>
        <h2>Create Offering</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                type="text"
                id="title"
                value={newOffering.title}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                type="text"
                id="description"
                value={newOffering.description}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="image_url">Image URL</label>
                <input
                type="text"
                id="image_url"
                value={newOffering.image_url}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="condition">Condition</label>
                <input
                type="text"
                id="condition"
                value={newOffering.condition}
                onChange={handleChange}
            />
            </div>
            <div>
                <label htmlFor="category_tag">Select a Category</label>
                <input
                type="text"
                id="category_tag"
                value={newOffering.category_tag}
                onChange={handleChange}
            />
            </div>
            <div>
            <button type="submit">
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
    </div>
  );
}

export default NewOffering;
