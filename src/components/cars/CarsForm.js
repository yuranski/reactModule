import {useEffect, useState} from "react";
import {Car} from "../car/Car";
import {getCars, saveValueCars} from "../../services/car.services";

export function CarsForm(){

    let [cars,setCars] = useState([])

    let [model,setModels] = useState([])
    let [price,setPrice] = useState([])
    let [year,setYear] = useState([])

    let [value,setValue] = useState({model:'',price:'',year:''})

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    },[])


    const onSubForm = (e) => {
        // e.preventDefault()
        let tempValue = {model,price,year}
        setValue({...tempValue})
        saveValueCars(tempValue).then()
    }

    const onInputChangeModel = (e) => {
        setModels(e.target.value)
    }
    const onInputChangePrice = (e) => {
        setPrice(e.target.value)
    }
    const onInputChangeYear = (e) => {
        setYear(e.target.value)
    }


    return(
        <div>
            <form onSubmit={onSubForm}>
                <input type="text" name={model}  onInput={onInputChangeModel} placeholder="Модель машини"/>
                <input type="text" name={price} onInput={onInputChangePrice} placeholder="Ціна машини"/>
                <input type="text" name={year} onInput={onInputChangeYear} placeholder="Рік машини"/>
                <button>Submit</button>
            </form>
            {cars.map(value => <Car key={value.id}
                                    model={value.model}
                                    price={value.price}
                                    year={value.year}/>)
                .filter(value1 => value.length > value1.length)}
        </div>
    )
}