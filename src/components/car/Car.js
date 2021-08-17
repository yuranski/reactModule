export function Car({id,model,price,year,deleted}){
    return(

        <div>
            {/*- по нажатии на кнопку delete машина должна удалятся*/}
            {/*с базы данных и со списка выведенных машин*/}
            <button onClick={()=>(deleted)}>Deleted</button>
            <button>Edit</button>

            {id} - {model} - {price} - {year}

        </div>

    )
}