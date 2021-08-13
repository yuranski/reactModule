export function User({item: {id,username}, infoID}){

    return(

        <div>
            {id} - {username}
            <button onClick={()=>infoID(id)}>infoId</button>
        </div>

    )
}