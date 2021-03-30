import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

function Create() {
  const { register, handleSubmit, errors } = useForm();
  const [create, setCreate] = useState({
    post: "",
    post_type: "",
  });
  const url = "http://127.0.0.1:8000/api/ghostpost/";

  const onSubmit = (e) => {
    // e.preventDefault()
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ create }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setCreate(json.create));
  };

  return (
    <>
      <h1>Create View</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Post:</Form.Label>
          <Form.Control
            type="text"
            name="post"
            ref={register({ required: "TEXT REQUIRED", maxLength: 280 })}
            placeholder="Write a roast or boast..."
          />
          {errors.text && <p>{errors.text.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Post Type:</Form.Label>
          <Form.Control
            as="select"
            name="post_type"
            ref={register({ required: "SELECTION REQUIRED" })}
          >
            <option>Boast</option>
            <option>Roast</option>
          </Form.Control>
        </Form.Group>
        {errors.select && <p>{errors.select.message}</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Create;
