export function Post({item: {id, title}, getPostDetails}) {



    return (
        <div>
            <button onClick={() => getPostDetails(id)}>Details</button>
            {id} - {title}
        </div>
    )
}