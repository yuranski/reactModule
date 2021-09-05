import './css/style.css';
import {PosterPreview} from "./InfoAboutFilms/PosterPreview";
import {StarsRating} from "./InfoAboutFilms/StarsRating";
import {Title} from "./InfoAboutFilms/Title";
import {Release} from "./InfoAboutFilms/Relese";
import {useSelector} from "react-redux";
import {GenreBadge} from "./GenreBadge";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


export function MoviesListCard({genresIds, poster_path, title, vote_average, release_date}) {



    return (
        <div className="child">
            <PosterPreview poster_path={poster_path}/>
            <Title title={title}/>
            <StarsRating vote_average={vote_average}/>
            <Release release_date={release_date}/>
            {/*todo поставити гарно жанри*/}
            <GenreBadge genresIds={genresIds}/>
        </div>

    )
}