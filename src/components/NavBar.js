import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { FaAws } from 'react-icons/fa';

const NavBar = ({ userName, signOut }) => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <FaAws aria-label="AWS" size="32" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/questions">questions</Nav.Link>
                        <Nav.Link as={Link} to="/tests">Tests</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{userName}</a>
                        </Navbar.Text>
                        <Button variant="outline-success" onClick={signOut}>
                            Sign out
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;

