import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';

function Home() {
  const [post, setPost] = useState([]);
  const url = "http://127.0.0.1:8000/api/ghostpost/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <>
      <h1>Home View</h1>
      {post.map((s) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://ww1.prweb.com/prfiles/2011/04/08/4931374/finallogo.jpg" />
          <Card.Body>
            <Card.Title>{s.post_type}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{s.post}</ListGroupItem>
            <ListGroupItem>Created at: {s.created_at}</ListGroupItem>
            <ListGroupItem>Total: {s.total_votes}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Upvote: {s.upvote}</Card.Link>
            <Card.Link href="#">Downvote: {s.downvote}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Home;
