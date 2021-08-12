import './App.css';
import {Users} from "./classWork/components/Users";
import {UsersHW} from "./homeWork/components/UsersHW";
import {Posts} from "./classWork/components/Posts";
import {PostsHW} from "./homeWork/components/PostsHW";
import {CommentsHW} from "./homeWork/components/CommentsHW";

function App() {
    return (
        <div>
            {/*<Users/>*/}
            <UsersHW/>
            <PostsHW/>
            <CommentsHW/>
        </div>
    );
}

export default App;
