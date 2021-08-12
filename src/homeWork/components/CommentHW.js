export function CommentHW({comments: {body}}) {
    return (
        <div>
            <ul>
                <li>{body}</li>
            </ul>
        </div>
    )
}