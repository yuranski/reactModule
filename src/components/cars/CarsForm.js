import {useEffect, useState} from "react";
import {Car} from "../car/Car";
import {getCars, saveValueCars} from "../../services/car.services";

export function CarsForm(){

    let [cars,setCars] = useState([])

    let [model,setModels] = useState([])
    let [price,setPrice] = useState([])
    let [year,setYear] = useState([])

    let [value,setValue] = useState({model:'',price:'',year:''})

    let [lastIndexArr,setLastIndexArr] = useState([])

    useEffect(() => {
        getCars().then(value => {
            setCars([...value])
            setLastIndexArr([...value])
        })
    },[])


    const onSubForm = (e) => {
        e.preventDefault()
        let tempValue = {model,price,year}
        setValue({...tempValue})
        saveValueCars(tempValue).then()

        console.log(model.length)
    }



    const onInputChangeModel = (e) => {
        setModels(e.target.value)

        if(model.length <= 20){
            console.log('asd')
        } else {
            console.log('333')
        }
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

            {cars.filter(value => value.id > lastIndexArr.length + 75).map(value =>  <Car key={value.id}
                                                                      id={value.id}
                                                                      model={value.model}
                                                                      price={value.price}
                                                                      year={value.year}/>)}
        </div>
    )
}