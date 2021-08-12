import {useEffect, useState} from "react";
import {getPosts} from "../services/post.service.HWjs";
import {getComments} from "../services/comment.serviceHW";
import {CommentHW} from "./CommentHW";

export function CommentsHW(){


    let [comments, setComments] = useState([])
    useEffect(() => {
        getComments().then(value => setComments([...value]))
    })


    return(

        <div>
            {comments.map(value => <CommentHW comments={value} key={value.id}/>)}
        </div>

    )
}