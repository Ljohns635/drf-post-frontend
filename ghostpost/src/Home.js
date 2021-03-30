import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup, Jumbotron } from "react-bootstrap";

function Home() {
  const [post, setPost] = useState([]);

  const url = "http://127.0.0.1:8000/api/ghostpost/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault()
    // fetch("http://127.0.0.1:8000/api/ghostpost/upvote/", {
    //   method: "POST",
    //   body: JSON.stringify({ post }),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => res.json())
    //   .then((json) => setPost(json.post));
  };
  return (
    <>
      <Jumbotron>
        <h1>Home View</h1>
      </Jumbotron>
      {post.map((s) => (
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
            <Card.Text>
              <button onClick={onHandleSubmit}>Upvote: </button>
              {s.upvote}
            </Card.Text>
            <Card.Text>Downvote: {s.downvote}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Home;
