import React, { useState } from "react";
import { updatePost } from "../api/posts";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px auto",
    maxWidth: "500px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "8px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const updatePostHandler = async () => {
    setIsUpdating(true);
    try {
      // @args : id, title, content
      await updatePost(post.id, title, content);
      setMessage("Post updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating post:", error);
      setMessage("Failed to update post.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div style={cardStyle}>
      <div>
        <label>Title:</label>
        <input
          style={inputStyle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          style={inputStyle}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "8px" }}>Author: {post.author.username}</div>
      <div style={{ fontSize: "12px", color: "#888", marginBottom: "12px" }}>
        Created: {new Date(post.createdAt).toLocaleString()}
        <br />
        Updated: {new Date(post.updatedAt).toLocaleString()}
      </div>
      <button
        style={buttonStyle}
        onClick={updatePostHandler}
        disabled={isUpdating}
      >
        {isUpdating ? "Updating..." : "Update Post"}
      </button>
      {message && <div style={{ marginTop: "10px" }}>{message}</div>}
    </div>
  );
};

export default PostCard;
