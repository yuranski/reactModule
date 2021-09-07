import {discoverMovie, genresMovie} from "../sercives/movie.service";
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "./MoviesListCard";

import {Pagination} from "react-bootstrap";

let i = 1

export function MoviesList() {

    let state = useSelector(state => state);
    let {filmsInfo} = state

    let dispatch = useDispatch()

    function nextPage() {
        if(i >= 1 && i <= 500) {
            i++;
            discoverMovie(i).then(value => {
                dispatch({type: 'NAME', payload: value.data.results})
            })
        }
    }

    function prevPage() {
        if(i > 1 && i <= 500)
        {
            i--;
            discoverMovie(i).then(value => {
                dispatch({type: 'NAME', payload: value.data.results})
            })
        }

    }

    return (
        <div>
            <div className='flex justify-content-center mTop20'>
                <Pagination>
                    <Pagination.Prev onClick={prevPage}/>
                    <Pagination.Next onClick={nextPage}/>
                </Pagination>
            </div>
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