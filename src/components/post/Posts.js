import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.services";
import {Post} from "./Post";

export function Posts() {

    let [post, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {setPosts([...value])})
    })


    return (
        <div>{post.map(value => <Post key={value.id} id={value.id} title={value.title}/>)}</div>
    )
}