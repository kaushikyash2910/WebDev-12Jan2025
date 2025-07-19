import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { createPost } from "../api/posts";
import axios from "axios";
import { useCreatePostMutation } from "../services/api";

export default function NewPost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const [createPosts, result] = useCreatePostMutation();
  const handleChange = ({ target: { name, value } }) =>
    setForm((f) => ({ ...f, [name]: value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPosts({ title: form.title, content: form.content });

    navigate("/admin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
      />
      <button type="submit">Create Post</button>
    </form>
  );
}
