import { useState, useEffect } from "react";

const ShopItem = ({ match }) => {
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=70a49d28-e7b8-4989-9f36-9c4f75386238`
    );
    const data = await response.json();
    // console.log(data.data);
  };

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
};

export default ShopItem;
