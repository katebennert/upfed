import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OfferingList() {
    const [offerings, setOfferings] = useState([]);

    useEffect(() => {
        fetch("/offerings")
          .then((r) => r.json())
          .then(console.log);
      }, []);

    return (
        <p>helllo world</p>
    )
}

export default OfferingList;