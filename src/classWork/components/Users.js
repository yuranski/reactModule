import {useEffect, useState} from "react";
import {User} from "./User";
import {getUserPosts, getUsers} from "../services/user.service";

export function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value])
        })
    }, []);

    return (
        <div>
            {users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
}




















