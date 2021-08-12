import {useEffect, useState} from "react";
import {getUserPosts} from "../services/user.service";
import {Posts} from "./Posts";

export function User({user}) {

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getUserPosts(user.id).then(r => setPosts([...r]))
    }, [])


    return (
        <div>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <div>
                <ul>
                    {posts.map(value => <Posts body={value} key={value.id}/>)}
                </ul>
            </div>
        </div>
    );
}























