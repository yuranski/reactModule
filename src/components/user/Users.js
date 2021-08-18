import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";
import {User} from "./User";

export function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {setUsers([...value])})
    },[])


    return (
        <div>{users.map(value => <User key={value.id} item={value}/>)}</div>
    )
}

