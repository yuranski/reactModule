import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";

export function Users() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {setUsers([...value])})
    })


    return (
        <div>{users.map(value => <div key={value.id}>{value.id}-{value.name}</div>)}</div>
    )
}

