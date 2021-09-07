import {Container, Image, Nav, Navbar, Pagination} from "react-bootstrap";
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
                        <UserInfo/>
                    </Nav>
                </Container>
            </Navbar>
    )
}