import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPost} from "../../services/posts.services";

export function PostDetails() {
    let {id:postId} = useParams()

    let [post,setPost] = useState({})

    useEffect(() => {
        getPost(postId).then(value => setPost({...value}))
    },[postId])

    return (
        <div>{JSON.stringify(post)}</div>
    )
}