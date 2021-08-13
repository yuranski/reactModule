import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.services";
import {Comment} from "../comment/Comment";

export function Comments() {

    let [comments, setComments] = useState([])
    let [comment, setComment] = useState(null)

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    function bodyComm(id) {
        let idComm = comments.find(value => value.id === id)
        setComment(idComm)
    }

    return (
        <div>
            {comment && <div>{comment.id} - {comment.name}</div>}
            {comments.map(value => <Comment key={value.id} item={value} bodyComm={bodyComm}/>)}
        </div>
    );
}