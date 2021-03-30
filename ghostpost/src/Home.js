import React, { useState, useEffect } from "react";

function Home() {
    const [post, setPost] = useState([])
    const url = 'http://127.0.0.1:8000/api/ghostpost/'
    useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
    return(
        <>
        <h1>Home View</h1>
        {post.map((s) => (
        <ul key="{s}">
          <li><strong>Post type:</strong> {s.post_type}</li>
          <li><strong>Post:</strong> {s.post}</li>
          <li><strong>Upvote:</strong> {s.upvote}</li>
          <li><strong>Downvote:</strong> {s.downvote}</li>
          <li><strong>Created at:</strong> {s.created_at}</li>
          <li><strong>Vote total:</strong> {s.total_votes}</li>
        </ul>
      ))}
        </>
    )
}

export default Home;