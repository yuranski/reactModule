export function PosterPreview({poster_path, scale}) {
    return (
        <div className='mBot10'>
            <img className={scale} src={'https://image.tmdb.org/t/p/w300/' + poster_path}
                 alt={'Poster'}/>
        </div>
    )
}