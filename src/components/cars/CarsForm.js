import {useEffect, useState} from "react";
import {Car} from "../car/Car";
import {getCars, saveValueCars} from "../../services/car.services";
import './carForm.css';

export function CarsForm() {

    let [cars, setCars] = useState([])

    let [model, setModels] = useState([])
    let [price, setPrice] = useState([])
    let [year, setYear] = useState([])

    let [value, setValue] = useState({model: '', price: '', year: ''})

    let [lastIndexArr, setLastIndexArr] = useState([])

    useEffect(() => {
        getCars().then(value => {
            setCars([...value])
            setLastIndexArr([...value])
        })
    }, [])

    const [disableModel, setDisableModel] = useState(true);
    const [disablePrice, setDisablePrice] = useState(true);
    const [disableYear, setDisableYear] = useState(true);

    const onSubForm = (e) => {
        // e.preventDefault()
        let tempValue = {model, price, year}
        setValue({...tempValue})
        saveValueCars(tempValue).then()
    }

    console.log(disableModel, disablePrice, disableYear)

    const onInputChangeModel = (e) => {
        if (e.target.value.length <= 20 && e.target.value.length >= 1) {
            setDisableModel(false)
            setModels(e.target.value)
            e.target.className = "errorValidGreen"
        } else {
            setDisableModel(true)
            e.target.className = "errorValidRed"
        }
    }
    const onInputChangePrice = (e) => {
        if (e.target.value > 0) {
            setDisablePrice(false)
            setPrice(e.target.value)
            e.target.className = "errorValidGreen"
        } else {
            setDisablePrice(true)
            e.target.className = "errorValidRed"
        }
    }
    const onInputChangeYear = (e) => {
        if (e.target.value >= 1990 && e.target.value <= 2021) {
            setDisableYear(false)
            setYear(e.target.value)
            e.target.className = "errorValidGreen"
        } else {
            setDisableYear(true)
            e.target.className = "errorValidRed"
        }
    }

    return (
        <div>
            <form onSubmit={onSubForm}>
                <input type="text" name={model} onInput={onInputChangeModel} placeholder="Модель машини"/>
                <input type="text" name={price} onInput={onInputChangePrice} placeholder="Ціна машини"/>
                <input type="text" name={year} onInput={onInputChangeYear} placeholder="Рік машини"/>
                <button disabled={disableModel || disablePrice || disableYear} id='btn'>Submit</button>
            </form>

            {cars.filter(value => value.id > lastIndexArr.length + 75).map(value => <Car key={value.id}
                                                                                         id={value.id}
                                                                                         model={value.model}
                                                                                         price={value.price}
                                                                                         year={value.year}/>)}
        </div>
    )
}