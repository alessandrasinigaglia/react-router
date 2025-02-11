import { useState, useEffect } from "react";
import axios from "axios";


export default function Posts() {
    const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        console.log("Dati ricevuti:", response.data);
        setShoppingList(response.data);
      });
  }, []);

    return (
        <>
        <h1>posts</h1>
        {shoppingList.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="Immagine" />
            <h2>{item.name}</h2>
            <p>{item.ingredienti.join(", ")}</p>
          </div>
        ))}
        
        </>
        )
}