import {useEffect} from "react";
import {discoverMovie, genresMovie} from "../sercives/movie.service";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "./MoviesListCard";

export function MoviesList() {

    let state = useSelector(state => state);
    let dispatch = useDispatch()
    let {filmsInfo, genres} = state

    useEffect(() => {
        discoverMovie().then(value => {
            for (const argument of value.data.results) {
                dispatch({type: 'NAME', payload: argument})
            }
        })
        genresMovie().then(value => {
            for (const valueElement of value.data.genres) {
                dispatch({type: 'GENRES', payload: valueElement})
            }
        })
    }, [])


    function xxx() {
        console.log(filmsInfo)
        console.log(genres)
    }


    return (
        <div>
            <button onClick={xxx}>asdasd</button>
            {/*todo виправити className='parent' якщо буде час*/}


            <div className='parent'>

                {/*{genres.filter(genres.id === filmsInfo.id).map(value => <div>{value}<div/>)}*/}

                {filmsInfo.map(value => <MoviesListCard key={value.id}
                                                        poster_path={value.poster_path}
                                                        title={value.title}
                                                        vote_average={value.vote_average}
                                                        release_date={value.release_date}
                                                        genresIds={value.genre_ids}/>)}
            </div>
        </div>
    )
}