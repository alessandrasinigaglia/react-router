import { BrowserRouter, Routes, Route } from "react-router-dom";

//layout
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import HomePage from "./pages/Homepage";
import Posts from "./pages/Posts";
import AboutUs from "./pages/AboutUs";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )


    // const [author, setAuthor] = useState("");
    //   const [content, setContent] = useState("");
    //   const [image, setImage] = useState("");
    //   const [category, setCategory] = useState("Antipasto");

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //   };

  // return (
  //   <div>
  //     <h1>Lista dei Post</h1>
  //     <div>
        
  //     </div>

  //     <hr />
  //     <h3>Aggiungi un nuovo post</h3>
  //     <form onSubmit={handleSubmit}>
  //       <label>Nome</label>
  //       <input
  //         type="text"
  //         value={author}
  //         onChange={(e) => setAuthor(e.target.value)}
  //       />

  //       <label>Ingredienti</label>
  //       <input
  //         type="text"
  //         value={content}
  //         onChange={(e) => setContent(e.target.value)}
  //       />

  //       <label>Immagine (URL)</label>
  //       <input
  //         type="text"
  //         value={image}
  //         onChange={(e) => setImage(e.target.value)}
  //       />

  //       <label>Categoria</label>
  //       <select value={category} onChange={(e) => setCategory(e.target.value)}>
  //       <option value="Antipasto">Antipasto</option>
  //         <option value="Primo piatto">Primo piatto</option>
  //         <option value="Secondo piatto">Secondo piatto</option>
  //         <option value="Dolce">Dolce</option>
  //       </select>

  //       <button type="submit">Invia</button>
  //     </form>
  //   </div>
  // );
}
