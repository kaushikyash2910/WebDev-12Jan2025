import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../api/posts.js";

export default function AdminPortal() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => setPosts((await fetchPosts()).data))();
  }, []);

  // const handleDelete = async (id) => {
  //   if (confirm("Delete this post?")) {
  //     await deletePost(id);
  //     setPosts(posts.filter((p) => p.id !== id));
  //   }
  // };

  return (
    <div>
      <button onClick={() => navigate("/admin/new")}>New Post</button>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <h3>{title}</h3>
            <button onClick={() => navigate(`/admin/edit/${id}`)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
