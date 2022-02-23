import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    let data = await response.json();
    setItems(data.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <main>
        {items.map((item) => (
          <Link to={`/shop/${item.itemId}`} key={item.itemId}>
            <h1 key={item.itemId}>{item.item.name}</h1>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Shop;
