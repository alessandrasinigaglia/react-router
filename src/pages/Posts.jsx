import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Posts() {
  const [shoppingList, setShoppingList] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Antipasto");

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
        setShoppingList(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      name: author,  
      ingredienti: content.split(","),
      image,
      category,
    };

    axios
      .post("http://localhost:3000/posts", newPost)
      .then((response) => {
        setShoppingList([...shoppingList, response.data]); 
        setAuthor("");
        setContent("");
        setImage("");
        setCategory("Antipasto");
      });
  };

  return (
    <div>
      <section className="recent-posts">
        <h1>Post Recenti</h1>
        <div className="grid">
          {shoppingList.map((item) => (
            <div key={item.id} className="post-card">
              <img src={item.image} alt={item.name} />
              <div className="post-content">
                <h3>{item.name}</h3>
                <p>{item.ingredienti.join(", ")}</p>
                <span>{item.category}</span>
                <Link to={`/post/${item.id}`} className="post-link">Leggi di più →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
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
