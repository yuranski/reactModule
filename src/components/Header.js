import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import {UserInfo} from "./UserInfo";
import {Toggle} from "./Themes/Toggle";



export function Header({themeToggler}) {
    return (

                <Navbar bg="dark" variant="dark">
                    <Toggle themeToggler={themeToggler}/>

                    <Container>
                        <Navbar.Brand>Site by B.Y.</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">2019</Nav.Link>
                            <Nav.Link href="#features">2020</Nav.Link>
                            <Nav.Link href="#pricing">2021</Nav.Link>
                            <UserInfo/>
                        </Nav>
                    </Container>
                </Navbar>
    )
}