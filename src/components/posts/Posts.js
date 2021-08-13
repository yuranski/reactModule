import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.services";
import {Post} from "../post/Post";

export function Posts(){

    let [posts, setPosts] = useState([])
    let [detailsPost, setDetailsPost] = useState(null)

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    },[])


    function getPostDetails(id){
        let findPost = posts.find(value => value.id === id)
        setDetailsPost(findPost)
    }

    return(
        <div>
            {posts.map(value => <Post key={value.id} item={value} getPostDetails={getPostDetails}/>)}
            {/*{detailsPost && <div>{detailsPost.body}</div>}*/}
            {detailsPost && <Post body={detailsPost.body}/>}
        </div>
    )
}