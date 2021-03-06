import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Jumbotron } from "react-bootstrap";

function Create() {
  const { register, handleSubmit, errors } = useForm();
  const [create, setCreate] = useState({
    post: "",
    post_type: "",
  });
  const url = "http://127.0.0.1:8000/api/ghostpost/";

  const onSubmit = (e) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(create),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // recieved help from Elizabeth S because my targets were picking up on the same value
  const onHandleChange = (e) => {
    const value = e.target.value;
    setCreate({
      ...create,
      [e.target.name]: value,
    });
    // console.log(value);
  };

  return (
    <>
      <Jumbotron fluid className="text-white text-center header-image">
          <h1 style={{ fontSize: "60px"}}>Create Post</h1>
      </Jumbotron>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Post:</Form.Label>
          <Form.Control
            type="text"
            name="post"
            ref={register({ required: "TEXT REQUIRED", maxLength: 280 })}
            onChange={onHandleChange}
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
            onChange={onHandleChange}
          >
            <option>---Select---</option>
            <option>Boast</option>
            <option>Roast</option>
          </Form.Control>
        </Form.Group>
        {errors.select && <p>{errors.select.message}</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div class="card-footer text-center p-3 my-3 bg-light">
        Copyright &copy; Latisha Johnson
      </div>
    </>
  );
}

export default Create;
