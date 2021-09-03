import './style.css';
import {PosterPreview} from "./InfoAboutFilms/PosterPreview";
import {StarsRating} from "./InfoAboutFilms/StarsRating";
import {Title} from "./InfoAboutFilms/Title";
import {Release} from "./InfoAboutFilms/Relese";
import {useSelector} from "react-redux";

export function MoviesListCard({genresIds, poster_path, title, vote_average, release_date}) {

    let genres = useSelector(({genres}) => genres)
    let join = genresIds.join(';')
    const qwe = genres.filter(value => join.indexOf(value.id) !== -1)

    console.log(qwe);

    return (
        <div className="child">
            <div>
                {qwe.map(value => <p>{value.name}</p>)}
            </div>
            <PosterPreview poster_path={poster_path}/>
            <Title title={title}/>
            <StarsRating vote_average={vote_average}/>
            <Release release_date={release_date}/>
        </div>

    )
}