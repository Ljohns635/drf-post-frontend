import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';

function Boast() {
    const [boast, setBoast] = useState([])
    const url = 'http://127.0.0.1:8000/api/ghostpost/boast/'
    useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBoast(data));
  }, []);
    return(
        <>
        <h1>Boast View</h1>
        {boast.map((s) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://ww1.prweb.com/prfiles/2011/04/08/4931374/finallogo.jpg" />
          <Card.Body>
            <Card.Title>{s.post_type}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{s.post}</ListGroupItem>
            <ListGroupItem>Created at: {s.created_at}</ListGroupItem>
            <ListGroupItem>Total: {s.upvote - s.downvote}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Upvote: {s.upvote}</Card.Link>
            <Card.Link href="#">Downvote: {s.downvote}</Card.Link>
          </Card.Body>
        </Card>
      ))}
        </>
    )
}

export default Boast;