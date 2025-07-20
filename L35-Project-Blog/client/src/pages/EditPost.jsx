import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";
import { useState } from "react";
import PostCard from "./Postcard";

const EditPost = () => {
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});
  
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    (async function () {
      const { data } = await fetchPost(id);
      setPostData(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <div>...Loading</div>
      ) : (
       <PostCard post={postData} />
      )}
    </div>
  );
};

export default EditPost;
