import './css/style.css';
import {PosterPreview} from "./InfoAboutFilms/PosterPreview";
import {StarsRating} from "./InfoAboutFilms/StarsRating";
import {Title} from "./InfoAboutFilms/Title";
import {Release} from "./InfoAboutFilms/Relese";
import {GenreBadge} from "./GenreBadge";
    import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        withRouter
    } from "react-router-dom";


export function MoviesListCard({item, poster_path, title, vote_average, release_date}) {

    return (
        <div className="child">
            <Link to={{pathname: '/about/' + item.id, state: item}}>
                <PosterPreview scale={'scale'} poster_path={poster_path}/>
            </Link>

            <Title title={title}/>
            <StarsRating vote_average={vote_average}/>
            <Release mBot40={'mBot40'} release_date={release_date}/>
        </div>
    )
}