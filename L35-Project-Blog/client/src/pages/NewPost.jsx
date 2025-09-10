import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePostMutation } from "../services/api";

export default function NewPost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();
  const [createPosts] = useCreatePostMutation();

  const handleChange = ({ target: { name, value } }) =>
    setForm((f) => ({ ...f, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPosts({ title: form.title, content: form.content });
    navigate("/admin");
  };

  // Styles
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
      padding: "24px",
    },
    form: {
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "#fff",
      padding: "32px",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#111827",
    },
    input: {
      padding: "14px 18px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      backgroundColor: "#f9fafb",
      outline: "none",
      transition: "border-color 0.2s",
    },
    textarea: {
      padding: "14px 18px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      backgroundColor: "#f9fafb",
      outline: "none",
      resize: "vertical",
      minHeight: "150px",
    },
    button: {
      padding: "14px",
      backgroundColor: "#2563eb",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "500",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.2s ease-in-out",
    },
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Create New Post</h2>

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
          style={styles.input}
          required
          onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
          onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
        />

        <textarea
          name="content"
          placeholder="Write your content here..."
          value={form.content}
          onChange={handleChange}
          style={styles.textarea}
          required
          onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
          onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
        />

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Publish Post
        </button>
      </form>
    </div>
  );
}
