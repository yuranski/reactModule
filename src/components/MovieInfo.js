import {GenreBadge} from "./GenreBadge";
import {PosterPreview} from "./InfoAboutFilms/PosterPreview";
import {Title} from "./InfoAboutFilms/Title";
import {StarsRating} from "./InfoAboutFilms/StarsRating";
import {Release} from "./InfoAboutFilms/Relese";
import {Button} from "react-bootstrap";

export function MovieInfo(props) {

    return (
        <div className='mTop200'>
            <div className='flex jstContent'>
                <PosterPreview poster_path={props.location.state.poster_path}/>
            </div>
            <div className='flex jstContent'>
                <Title title={props.location.state.title}/>
            </div>
            <div className='flex jstContent'>
                <StarsRating vote_average={props.location.state.vote_average}/>
            </div>
            <div className='flex jstContent'>
                <Release release_date={props.location.state.release_date}/>
            </div>
            <div className='flex jstContent'>
                <GenreBadge genresIds={props.location.state.genre_ids}/>
            </div>
            <div className='flex jstContent'>
                <p>{props.location.state.overview}</p>
            </div>
            <div className='flex jstContent'>
                <Button variant="danger" onClick={() => props.history.goBack()}>Назад</Button>
            </div>
        </div>
    )
}