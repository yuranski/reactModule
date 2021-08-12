export function UserHW({user: {name, username}}) {
    return (
        <div>
            <p>
                {name}
                <br/>
                {username}
            </p>
        </div>
    )
}