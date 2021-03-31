import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup, Jumbotron } from "react-bootstrap";
import "./Home.css";

function Home() {
  const [post, setPost] = useState([]);
  // console.log(post)
  const [count, setCount] = useState(0)

  const url = "http://127.0.0.1:8000/api/ghostpost/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  // Recieved help from my facilitator Elizabeth S with my upvote and downvote
  const onHandleUpvote = (id) => (e) => {
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/ghostpost/${id}/upvote/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setCount({
        count: count + 1
      }));
  };

  const onHandleDownvote = (id) => (e) => {
    // console.log(id)
    fetch(`http://127.0.0.1:8000/api/ghostpost/${id}/downvote/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setCount({
        count: count + 1
      }));
  };

  return (
    <>
      <Jumbotron>
        <h1>Home View</h1>
      </Jumbotron>
      <div className="flexbox-contai">
      {post.map((s) => (
        <Card  className="post" style={{ width: "18rem" }}>
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
              <button onClick={onHandleUpvote(s.id)}>Upvote: </button>
              {s.upvote}
            </Card.Text>
            <Card.Text><button onClick={onHandleDownvote(s.id)}>Downvote: </button>
              {s.downvote}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
     </div>
    </>
  );
}

export default Home;
