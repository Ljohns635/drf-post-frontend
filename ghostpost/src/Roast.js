import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup, Jumbotron } from "react-bootstrap";

function Roast() {
  const [roast, setRoast] = useState([]);
  const url = "http://127.0.0.1:8000/api/ghostpost/roast/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRoast(data));
  }, []);
  return (
    <>
      <Jumbotron fluid className="text-white text-center header-image">
          <h1 style={{ fontSize: "60px"}}>Roast</h1>
      </Jumbotron>
      <div className="flexbox-container">
        {roast.map((s) => (
          <Card className="post" style={{ width: "18rem" }}>
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
      <div class="card-footer text-center bg-light">
        Copyright &copy; Latisha Johnson
      </div>
    </>
  );
}

export default Roast;
