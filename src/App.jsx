import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Antipasto");

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        console.log("Dati ricevuti:", response.data);
        setShoppingList(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Lista dei Post</h1>
      <div>
        {shoppingList.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="Immagine" />
            <h2>{item.name}</h2>
            <p>{item.ingredienti.join(", ")}</p>
          </div>
        ))}
      </div>

      <hr />
      <h3>Aggiungi un nuovo post</h3>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Ingredienti</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label>Immagine (URL)</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Categoria</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Antipasto">Antipasto</option>
          <option value="Primo piatto">Primo piatto</option>
          <option value="Secondo piatto">Secondo piatto</option>
          <option value="Dolce">Dolce</option>
        </select>

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
