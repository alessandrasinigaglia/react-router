import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function PostDetail() { 
  const [post, setPost] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((response) => {
      setPost(response.data);
    }).catch(error => {
      console.error("Errore nel caricamento del post:", error);
    });
  }, [id]);

  if (!post) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <img src={post.image} alt={post.name} />
      <h1>{post.name}</h1>
      {post.ingredienti && (
        <ul>
          {post.ingredienti.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

  
