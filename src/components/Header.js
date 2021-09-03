import {Container, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";

export function Header() {



    //todo зробити білу тему
    let [theme,setTheme] = useState([])
    function xxx() {
        console.log(Navbar.defaultProps.bg)
        console.log(Navbar.defaultProps.variant)
        Navbar.defaultProps.variant = "light"
        // console.log(Navbar.defaultProps.variant)
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Site by B.Y.</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">2019</Nav.Link>
                        <Nav.Link href="#features">2020</Nav.Link>
                        <Nav.Link href="#pricing">2021</Nav.Link>
                        <button onClick={xxx}>Click</button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}