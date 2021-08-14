import {useEffect, useState} from "react";
import {getUserPosts} from "../../services/user.services";

export function User({item:{id,name},posts}){
    return(
        <div>
            <button onClick={()=>posts(id)}>Posts</button>
            {id} - {name}
        </div>
    )
}