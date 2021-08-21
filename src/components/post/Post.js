import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
export function Post({item}) {
    return (
        <div>
            <Link to={{pathname: '/posts/' + item.id, state:item}}>Details</Link>
            {item.id}-{item.title}
        </div>
    )
}