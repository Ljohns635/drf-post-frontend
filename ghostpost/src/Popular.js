import React, { useState, useEffect } from "react";

function Popular() {
    const [vote, setVote] = useState([])
    const url = 'http://127.0.0.1:8000/api/ghostpost/highest/'
    useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVote(data));
  }, []);
    return(
        <>
        <h1>Popular View</h1>
        {vote.map((s) => (
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

export default Popular;