import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.sercives";

export function Users(){


    let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    },[])



    return(


        <div>asdasd</div>


    );
}