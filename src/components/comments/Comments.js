import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.services";
import {getComments} from "../../services/comments.services";

export function Comments() {

    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => {setComments([...value])})
    })


    return (
        <div>{comments.map(value => <div key={value.id}>{value.id}-{value.name}</div>)}</div>
    )
}