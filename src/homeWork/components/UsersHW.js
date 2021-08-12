import {useEffect, useState} from "react";
import {getUsers} from "../../classWork/services/user.service";
import {UserHW} from "./UserHW";

export function UsersHW(){

    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    },[])

    return(
        <div>
            {users.map(value => <UserHW user={value} key={value.id}/>)}

        </div>
    )
}