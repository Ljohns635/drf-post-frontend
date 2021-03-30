import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/boast">Boast</Nav.Link>
        <Nav.Link href="/roast">Roast</Nav.Link>
        <Nav.Link href="/popular">Popular</Nav.Link>
        <Nav.Link href="/create">Create</Nav.Link>
      </Nav>
      
    </Navbar>
  );
}

export default Navigation;