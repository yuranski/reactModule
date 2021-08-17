export function Car({id,model,price,year,deleted,edit}){

    return(
        <div>
            {/*- по нажатии на кнопку delete машина должна удалятся*/}
            {/*с базы данных и со списка выведенных машин*/}
            <button onClick={()=>deleted(id)}>Deleted</button>
            <button id={id} onClick={()=>edit(id,model,price,year)}>Edit</button>

            {id} - {model} - {price} - {year}
        </div>

    )
}