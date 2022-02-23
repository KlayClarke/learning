import { useEffect, useState } from "react";
import "./App.css";

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

  let itemKey = 0;

  return (
    <div>
      <main>
        {items.map((item) => (
          <h1 key={item.itemId}>{item.item.name}</h1>
        ))}
      </main>
    </div>
  );
};

export default Shop;
