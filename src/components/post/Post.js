import {useState} from "react";

export function Post({item: {id, title, body}, getPostDetails}) {
    let [flag, setFlag] = useState(false);
    return (
            <div>
                <button onClick={() => setFlag(!flag)}>Details</button>
                {id} - {title}
                {flag && <div>{id} - {body}</div>}
            </div>
    )
}

