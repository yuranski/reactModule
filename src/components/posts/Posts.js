import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.services";
import {Post} from "../post/Post";
import {Route} from "react-router-dom";
import {PostDetails} from "./PostDetails";

export function Posts(props) {

    let {match:{url}} = props

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            {posts.map(value => <Post item={value} key={value.id}/>)}
            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetails {...props}/>
            }}/>
        </div>
    )
}