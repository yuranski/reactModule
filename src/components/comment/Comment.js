export function Comment({item: {id, name}, bodyComm}){
    return(
        <div>

            <button onClick={()=>{bodyComm(id)}}>Details</button>
            {id} - {name}

        </div>
    )
}