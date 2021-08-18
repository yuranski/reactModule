import './App.css';
import {Users} from "./components/user/Users";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {Posts} from "./components/post/Posts";
import {Comments} from "./components/comments/Comments";

function App() {

    return (
        <Router>
            <div>
                <Link to={'/'}>null</Link>
                <br/>
                <Link to={'/user'}>users</Link>
                <br/>
                <Link to={'/post'}>posts</Link>
                <br/>
                <Link to={'/comments'}>comments</Link>
            </div>

            <div>
                {/*ex1*/}
                <Route path={'/user'} component={Users}/>
                {/*ex2*/}
                <Route path={'/post'} render={()=><Posts/>}/>
                {/*ex3*/}
                <Route path={'/comments'}>
                    <Comments/>
                </Route>
            </div>
        </Router>
    );
}

export default App;
