import {useEffect} from "react";
import {discoverMovie, genresMovie} from "../sercives/movie.service";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "./MoviesListCard";
import {Header} from "./Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export function MoviesList() {

    let state = useSelector(state => state);
    let {filmsInfo} = state



    return (
        <div>
            <div className='parent'>
                {filmsInfo.map(value => <MoviesListCard key={value.id}
                                                        poster_path={value.poster_path}
                                                        title={value.title}
                                                        vote_average={value.vote_average}
                                                        release_date={value.release_date}
                                                        genresIds={value.genre_ids}
                                                        item={value}/>)}
            </div>
        </div>
    )
}