import {useEffect, useState} from "react";
import {discoverMovie, genresMovie} from "../sercives/movie.service";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import './style.css';

export function Test() {

    let state = useSelector(state => state);
    let dispatch = useDispatch()
    let {nameFilm} = state


    useEffect(() => {
        discoverMovie().then(value => {
            for (const argument of value.data.results) {
                dispatch({type: 'NAME', payload: argument})
            }
        })
    }, [])

    function xxx() {
        console.log(nameFilm)
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
                    </Nav>
                </Container>
            </Navbar>

            {/*<button onClick={xxx}>ckick</button>*/}

            <div className="parent">
                {nameFilm.map(value =>
                    <div className="child" key={value.id}>


                        <img className="scale" src={'https://image.tmdb.org/t/p/w300/' + value.poster_path}
                             alt={'Poster'}/>

                        <br/>
                        <p> {value.title} <br/> ★ {value.vote_average}/10 IMDB <br/> Release - {value.release_date}</p>
                        <br/>
                    </div>)}

            </div>
        </div>
    )
}