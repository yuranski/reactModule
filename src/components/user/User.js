import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {useHistory} from "react-router";


export function User({item, history}) {

    // let history = useHistory()

    let details = () => {
        history.push(
            '/users/' + item.id,
            item
        )
    }

    return (
        <div>{item.id} - {item.name} -
            {/*<Link to={{pathname: '/users/' + item.id, state:item}}>Details</Link>*/}
            {/*<Link to={{pathname: '/users/' + item.id, state: item}}>Details</Link>*/}
            <button onClick={() => details()}>details</button>
        </div>
    )
}