export function PosterPreview({poster_path}) {
    return (
        <div>
            <img className="scale" src={'https://image.tmdb.org/t/p/w300/' + poster_path}
                 alt={'Poster'}/>
        </div>
    )
}