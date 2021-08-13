import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.sercives";
import {User} from "../user/User";

export function Users(){


    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    },[])

    const infoID = (id) => {
        let infoIdChoose = users.find(value => value.id === id)
        setUser(infoIdChoose)
    }

    return(
        <div>
            {users.map(value => <User key={value.id} item={value} infoID={infoID}/>)}
            {user && <div>{user.id}-{user.name}</div>}
        </div>
    );
}