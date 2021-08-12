import {Comments} from "./Comments";
import {useEffect, useState} from "react";
import {getCommentsPosts} from "../services/user.service";

export function Posts({body}){

    let [comm, setComm] = useState([])
    useEffect(() => {
        getCommentsPosts(body.id).then(r => setComm([...r]))
    },[])



    return(
        <div>
            {body.body}
            <ul>
                {comm.map(value => <Comments comm={value} key={value.id}/>)}
            </ul>
            <br/>
        </div>
    )
}