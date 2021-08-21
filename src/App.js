import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import './App.css';
import {Users} from "./components/users/Users";
import {StaticUserDetails} from "./components/user/StaticUserDetails";
import {useHistory} from "react-router";
import {Posts} from "./components/posts/Posts";

function App() {
    return (
        <Router>
            <div>
                <div>
                    <Link to={'/users'}>user page</Link>
                    <br/>
                    <Link to={'/posts'}>post page</Link>
                </div>
                <div>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                </div>
            </div>
        </Router>

    );
}

export default App;
