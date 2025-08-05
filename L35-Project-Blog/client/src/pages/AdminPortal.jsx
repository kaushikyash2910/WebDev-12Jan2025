import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeletePostMutation,
  useFetchPostsQuery,
} from "../services/api.js";

export default function AdminPortal() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useFetchPostsQuery();
  const [deletePost] = useDeletePostMutation();

  const handleDelete = async (id) => {
    if (window.confirm("Delete this post?")) {
      await deletePost(id);
    }
  };

  // Modern inline styles
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "20px",
      color: "#111827",
    },
    newPostButton: {
      padding: "10px 16px",
      fontSize: "15px",
      fontWeight: 500,
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginBottom: "24px",
      transition: "background-color 0.2s ease",
    },
    postList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    postItem: {
      backgroundColor: "#f9fafb",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: "17px",
      fontWeight: 500,
      color: "#1f2937",
      margin: 0,
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 14px",
      fontSize: "14px",
      fontWeight: 500,
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
    },
    editButton: {
      backgroundColor: "#3b82f6",
      color: "#fff",
    },
    deleteButton: {
      backgroundColor: "#ef4444",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Portal</h2>

      <button
        style={styles.newPostButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onClick={() => navigate("/admin/new")}
      >
        + New Post
      </button>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching posts.</div>
      ) : (
        <ul style={styles.postList}>
          {data.map(({ id, title }) => (
            <li key={id} style={styles.postItem}>
              <h3 style={styles.title}>{title}</h3>
              <div style={styles.buttonGroup}>
                <button
                  style={{ ...styles.button, ...styles.editButton }}
                  onClick={() => navigate(`/admin/edit/${id}`)}
                >
                  Edit
                </button>
                <button
                  style={{ ...styles.button, ...styles.deleteButton }}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
