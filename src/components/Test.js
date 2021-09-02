import {useEffect, useState} from "react";
import {discoverMovie, genresMovie} from "../sercives/movie.service";
import {Container, Nav, Navbar} from "react-bootstrap";

export function Test() {







    let [film, setFilm] = useState([]);
    let [img, setImg] = useState([]);

    useEffect(() => {
        discoverMovie().then(value => {


            for (const valueElement of value.data.results) {
                // console.log(valueElement.title)
                console.log(valueElement.poster_path)
                //
                // setFilm([...value.data.results])
                setImg([valueElement.poster_path])

                // setImg += valueElement.poster_path
            }


            // setFilm([...value.data.results])
            // console.log('1')
            //
            //
            // for (const valueElement of value.data.results) {
            //     console.log('2')
            //     console.log(valueElement.poster_path)
            //     setImg([valueElement.poster_path])
            //     // setFilm([valueElement.poster_path])
            // }


        })
    }, [])

    function xxx() {
        console.log(img)
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

            <button onClick={xxx}>ckick</button>

            {film.map(value =>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${img}`} alt="title"/>
                    {value.title}
                </div>)}

        </div>
    )
}