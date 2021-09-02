import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {discoverMovie, genresMovie} from "./sercives/movie.service";
import {Test} from "./components/Test";

function App() {




    return (
        <div>
            <Test/>
        </div>
    );
}

export default App;

