import {useEffect, useState} from "react";
import {getPosts} from "../services/post.service.HWjs";
import {PostHW} from "./PostHW";

export function PostsHW(){

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    },[])

    return(
        <div>
            {posts.map(value => <PostHW posts={value} key={value.id}/>)}
        </div>
    )
}