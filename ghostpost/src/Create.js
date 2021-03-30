import { Form, Button } from "react-bootstrap";

function Create() {
  return (
    <>
      <h1>Create View</h1>
      <Form>
        <Form.Group>
          <Form.Label>Post:</Form.Label>
          <Form.Control type="email" placeholder="Write a roast or boast..." />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Post Type:</Form.Label>
          <Form.Control as="select">
            <option>(Boast)</option>
            <option>(Roast)</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Create;
