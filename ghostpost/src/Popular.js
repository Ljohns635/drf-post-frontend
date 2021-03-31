import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

function Popular() {
  const [vote, setVote] = useState([]);
  const url = "http://127.0.0.1:8000/api/ghostpost/highest/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVote(data));
  }, []);
  return (
    <>
      <h1>Popular View</h1>
      <div className="flexbox-container">
        {vote.map((s) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://ww1.prweb.com/prfiles/2011/04/08/4931374/finallogo.jpg"
            />
            <Card.Body>
              <Card.Title>{s.post_type}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{s.post}</ListGroupItem>
              <ListGroupItem>Created at: {s.created_at}</ListGroupItem>
              <ListGroupItem>Total: {s.upvote - s.downvote}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Text className="left">Upvote: {s.upvote}</Card.Text>
              <Card.Text className="right">Downvote: {s.downvote}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Popular;
