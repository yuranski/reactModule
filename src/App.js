import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {discoverMovie, genresMovie} from "./sercives/movie.service";
import {Header} from "./components/Header";
import {MoviesList} from "./components/MoviesList";


function App() {


    return (
            <div>
                <Header/>
                <MoviesList/>
            </div>
    );
}

export default App;

