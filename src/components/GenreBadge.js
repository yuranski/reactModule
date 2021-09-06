import {useSelector} from "react-redux";

export function GenreBadge({genresIds}) {

    let genres = useSelector(({genres}) => genres)
    let join = genresIds.join(';')

    const genresOneMovie = genres.filter(value => join.indexOf(value.id) !== -1)

    return (
        <div className='flex'><p> Genres - /</p>
            {genresOneMovie.map(value => <p key={value.id}> {value.name}/</p>)}
        </div>
    )
}