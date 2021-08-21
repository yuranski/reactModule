import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/user.services";

export function UserDetails() {
    let {id:userId} = useParams();

    let [user,setUser] = useState({});

    useEffect(() => {
        getUser(userId).then(value => setUser({...value}))
    },[userId])

    return (
        <div>{JSON.stringify(user)}</div>
    )
}