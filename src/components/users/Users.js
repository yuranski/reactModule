import {useEffect, useState} from "react";
import {getUserPosts, getUsers} from "../../services/user.services";
import {User} from "../user/User";

export function Users() {

    let [users, setUsers] = useState([])
    let [userPost, setUserPost] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    function posts(id) {
        getUserPosts(id).then(value => {
            setUserPost([...value])
        })
    }

    return (
        <div>
            {users.map(value => <User key={value.id} item={value} posts={posts}/>)}
            {userPost && userPost.map((value, index) => <p>{index.id} {value.body}</p>)}
        </div>
    )
}